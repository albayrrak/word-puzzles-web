"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
import { startGame } from '@/actions/api'
import Loading from '@/views/components/loading'
import Login from '@/views/components/start'

const GameSection = () => {

    const [gameId, setGameId] = useState("")

    const handleStart = async (userName: string) => {
        const gameScreen = document.querySelector(".game")
        const loadingScreenElement = document.querySelector(".game .loading")
        const loginScreenElement = document.querySelector(".game .start")
        const response = await startGame({ username: userName })
        if (response.Success) {
            setGameId(response.Data.gameId)
            gameScreen?.classList.add("loading")
            loadingScreenElement?.classList.add("show")
            loginScreenElement?.classList.add("hide")
        }

    }


    useEffect(() => {
        const titleElement = document.querySelector(".login .title")
        const authElement = document.querySelector(".login .form")
        titleElement?.classList.add("slide")
        authElement?.classList.add("slide")

    }, [])



    return (
        <section className='game'>
            {/* 
            <Login handleStart={handleStart} />
            <Loading /> */}


        </section>
    )
}

export default GameSection