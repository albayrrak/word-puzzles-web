"use client"
import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
import { getGame, startGame } from '@/actions/api'
import Loading from '@/views/sections/game/components/loading'
import Play from '@/views/sections/game/components/play'
import StartGame from './components/start'
import { useStore } from '@/store/store'
import FinishGame from '../finishGame'

const GameSection = () => {
    const { loading, setLoading, game, setGame, playGame, setPlayGame, finishGame } = useStore(state => state)

    const handleStart = async (userName: string) => {
        try {
            setLoading(true)

            const response = await startGame({ username: userName })
            if (response.success) {
                const game = await getGame({ id: response.data.game?.gameId ?? "" })

                if (game.success) {
                    setTimeout(() => {
                        setLoading(false)
                    }, 3000)
                    setPlayGame(true)
                    setGame(game.data.game as GameResponseModel)
                }
            }

        } catch (error) {
            setLoading(false)
            console.log("error", error);

        }


    }

    useEffect(() => {
        const titleElement = document.querySelector(".play .title")
        const authElement = document.querySelector(".play .form")
        titleElement?.classList.add("slide")
        authElement?.classList.add("slide")
    }, [])

    return (
        <>
            <section className={'game ' + (loading ? "loading" : "") + (playGame ? "play" : "")}>
                <Play classNames={loading || playGame ? "hide" : ""} handleStart={handleStart} />
                <Loading classNames={loading ? "show" : ""} />
                {!loading && playGame && <StartGame classNames={!loading && playGame ? "show" : ""} />}
            </section>
        </>
    )
}

export default GameSection