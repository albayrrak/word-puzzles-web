"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { PiClockCountdownFill } from 'react-icons/pi'
import { MdScore } from 'react-icons/md'
import "./style.scss"
import { useStore } from '@/store/store'
import WordBox from '@/views/components/word-box'
import { getGame, wordVerify } from '@/actions/api'
import { useRouter } from 'next/navigation'

const GameSection = () => {
    const router = useRouter()
    const { game, setGame } = useStore(state => state)
    const [word, setWord] = useState("")
    const [timer, setTimer] = useState(60);
    const [wordError, setWordError] = useState(false)

    useEffect(() => {
        if (timer === 0) {
            // finish(game.id)
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
            const response = await wordVerify({ gameId: game.id, word: e.target.value })
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
    return (
        <section className='game'>
            <div className="wrapper">
                <div className="title">
                    <h1>Word Puzzles Game</h1>
                    <p>Please enter the word you think matches the hint given below. Use the input field to submit your answer. Good luck and have fun!</p>
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
                            <h4>60</h4>
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