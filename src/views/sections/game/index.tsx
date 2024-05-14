"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
import { startGame } from '@/actions/api'
import Loading from '@/views/sections/game/components/loading'
import Play from '@/views/sections/game/components/play'
import StartGame from './components/start'

const GameSection = () => {

    const [gameId, setGameId] = useState("")

    const handleStart = async (userName: string) => {
        const gameScreen = document.querySelector(".game")
        const loadingScreenElement = document.querySelector(".game .loading")
        const loginScreenElement = document.querySelector(".game .play")
        const response = await startGame({ username: userName })
        if (response.Success) {
            setGameId(response.Data.gameId)
            gameScreen?.classList.add("loading")
            loadingScreenElement?.classList.add("show")
            loginScreenElement?.classList.add("hide")
        }

    }


    useEffect(() => {
        const titleElement = document.querySelector(".play .title")
        const authElement = document.querySelector(".play .form")
        titleElement?.classList.add("slide")
        authElement?.classList.add("slide")

    }, [])



    return (
        <section className='game'>

            {/* <Play handleStart={handleStart} />
            <Loading /> */}
            <StartGame />


        </section>
    )
}

export default GameSection