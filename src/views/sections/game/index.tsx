"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { PiClockCountdownFill } from 'react-icons/pi'
import { MdScore } from 'react-icons/md'
import { useStore } from '@/store/store'
import WordBox from '@/views/components/word-box'
import { finishGame, getGame, wordVerify } from '@/actions/api'
import { useRouter, useParams } from 'next/navigation'
import Loading from '@/views/components/loading'
import { useTranslations } from 'next-intl'
import "./style.scss"

const GameSection = () => {
    const router = useRouter()
    const params = useParams()
    const { game, setGame } = useStore(state => state)
    const [word, setWord] = useState("")
    const [timer, setTimer] = useState(60);
    const [wordError, setWordError] = useState(false)

    const t = useTranslations("Game")


    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 3000)
    }, [])


    useEffect(() => {
        if (timer === 0) {
            finishGame({ gameId: game.id }).then(res => {
                console.log("test", res);

                if (res.success) {
                    clearInterval(timerId);
                    router.push("/")
                }
            })
        };

        const timerId = setInterval(() => {
            setTimer((prevCount) => prevCount - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timer]);

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setWord(e.target.value)
        setWordError(false)
        if (e.target.value.length === game.word.length) {
            const response = await wordVerify({ gameId: game.id, word: e.target.value, lang: params.layout as string })
            setWordError(false)


            if (response.data.wordStatus) {
                const newGame = await getGame({ id: game.id })
                setTimer(prev => prev + 15)
                setGame(newGame.data.game as GameResponseModel)
                setWord("")
            }

            if (!response.data.wordStatus) {
                setWordError(true)
                setWord("")
            }
            if (!response.data.gameStatus) {
                router.push("/finish")
            }


        }

    }


    if (loading) {
        return <Loading />
    }


    return (
        <section className='game'>
            <div className="wrapper">
                <div className="title">
                    <h1>{t("title")}</h1>
                    <p>{t("description")}!</p>
                </div>
                <div className='information'>
                    <div className='content'>
                        <div className="icon">
                            <PiClockCountdownFill size={24} color='#fff' />
                        </div>
                        <div className="text">
                            <h4>{timer}</h4>
                        </div>
                    </div>
                    <div className='content'>
                        <div className="icon">
                            <MdScore size={24} color='#fff' />

                        </div>
                        <div className="text">
                            <h4>{game.score}</h4>
                        </div>
                    </div>
                    <div className='content'>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} fontSize={20} color='#fff' />
                        </div>
                        <div className="text">
                            <h4>{game.level}</h4>
                        </div>
                    </div>
                </div>
                <form>
                    <div className='words'>
                        {game?.wordShuffle?.split("").map(x => <WordBox word={x} classnames={wordError ? "error" : ""} />)}

                    </div>
                    <label>
                        <input type="text" onChange={handleChange} value={word} placeholder='Kelime Girin' />
                    </label>
                </form>
            </div>
        </section>
    )
}

export default GameSection