import React, { ChangeEvent, useEffect, useState } from 'react'

import WordBox from '@/views/components/word-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBattleNet } from "@fortawesome/free-brands-svg-icons"
import { faHourglassEnd, faStar } from "@fortawesome/free-solid-svg-icons"
import { finishGame, getGame, wordVerify } from '@/actions/api'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'

import "./style.scss"
interface IProps {

    classNames: string;
}
const StartGame: React.FC<IProps> = ({ classNames }) => {
    const router = useRouter()
    const { game, setGame } = useStore(state => state)
    const [word, setWord] = useState("")
    const [timer, setTimer] = useState(60);
    const [error, setError] = useState(false)


    const finish = async (gameId: string) => {
        const response = await finishGame({ gameId: gameId })
        if (response.success && !response.data.gameStatus) {
            router.push("/finish")
        }
    }

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

        if (e.target.value.length === game.word.length) {
            const response = await wordVerify({ gameId: game.id, word: e.target.value })


            if (response.data.wordStatus) {
                setTimer(prev => prev + 15)
                setWord("")
                const newGame = await getGame({ id: game.id })
                setGame(newGame.data.game as GameResponseModel)
            }

            if (!response.data.wordStatus) {

            }

            if (!response.data.gameStatus) {
                router.push("/finish")
            }


        }

    }

    return (
        <div className={'start ' + (classNames ? classNames : "")}>
            <div className="information">
                <h1>Welcome {game?.player?.username}</h1>
                <div className='content'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faHourglassEnd} size='1x' color='#FEB941' />
                    </div>
                    <div className='text'>
                        <h2>Timer</h2>
                        <h2>{timer}</h2>
                    </div>
                </div>
                <div className='content'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faStar} size='1x' color='#FEB941' />
                    </div>
                    <div className='text'>
                        <h2>Point</h2>
                        <h2>{game?.score}</h2>
                    </div>
                </div>


            </div>
            <div className='gaming'>
                <h1>Word Puzzles Game</h1>
                <p>"Please enter the word you think matches the hint given below. Use the input field to submit your answer. Good luck and have fun!"</p>
                <div className='words'>
                    {game?.wordShuffle?.split("").map(x => <WordBox word={x} />)}
                </div>
                <div className='form'>
                    <input type="text" onChange={handleChange} value={word} />
                </div>

            </div>
            <div className="circle">
                <FontAwesomeIcon icon={faBattleNet} color='#fff' size='2x' />
            </div>
        </div>
    )
}

export default StartGame