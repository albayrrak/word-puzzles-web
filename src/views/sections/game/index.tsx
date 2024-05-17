"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
import { getGame, startGame } from '@/actions/api'
import Loading from '@/views/sections/game/components/loading'
import LoadingFullScreen from '@/views/components/loading'
import Play from '@/views/sections/game/components/play'
import StartGame from './components/start'
import { useStore } from '@/store/store'
import FinishGame from '../finishGame'
import Aside from '@/views/layouts/aside'

const GameSection = () => {
    const [fullLoadingScreen, setFullLoadingScreen] = useState(false)


    useEffect(() => {
        setTimeout(() => { setFullLoadingScreen(false) }, 4000)
    }, [])

    if (fullLoadingScreen) {
        return <LoadingFullScreen />
    }
    return (
        <section className='game'>
            <Aside />
            <Play />
            {/* <Loading classNames={loading ? "show" : ""} />
                {!loading && playGame && <StartGame classNames={!loading && playGame ? "show" : ""} />} */}
        </section>
    )
}

export default GameSection