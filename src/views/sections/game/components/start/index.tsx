import React from 'react'

import "./style.scss"
import WordBox from '@/views/components/word-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBattleNet } from "@fortawesome/free-brands-svg-icons"
import { faHourglassEnd, faStar } from "@fortawesome/free-solid-svg-icons"
const StartGame = () => {
    return (
        <div className='start'>
            <div className="information">
                <h1>Welcome Yucel</h1>
                <div className='content'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faHourglassEnd} size='1x' color='#FEB941' />
                    </div>
                    <div className='text'>
                        <h2>Time</h2>
                        <h2>1</h2>
                    </div>
                </div>
                <div className='content'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faStar} size='1x' color='#FEB941' />
                    </div>
                    <div className='text'>
                        <h2>Point</h2>
                        <h2>1</h2>
                    </div>
                </div>


            </div>
            <div className='gaming'>
                <h1>Word Puzzles Game</h1>
                <p>"Please enter the word you think matches the hint given below. Use the input field to submit your answer. Good luck and have fun!"</p>
                <div className='words'>
                    <WordBox word='Y' />
                    <WordBox word='U' />
                    <WordBox word='C' />
                    <WordBox word='E' />
                    <WordBox word='L' />
                </div>
                <div className='form'>
                    <input type="text" />
                </div>

            </div>
            <div className="circle">
                <FontAwesomeIcon icon={faBattleNet} color='#fff' size='2x' />
            </div>
        </div>
    )
}

export default StartGame