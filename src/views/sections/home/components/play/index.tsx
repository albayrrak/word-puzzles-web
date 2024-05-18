"use client"
import React, { useEffect, useRef, useState } from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/views/components/button'
import { getGame, startGame } from '@/actions/api'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import "./style.scss"



const Play = () => {
    const [mounted, setMounted] = useState(false)
    const { setGame, setPlayGame, setToastify } = useStore(state => state)
    const userInputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const { t } = useTranslation()

    const handleStart = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await startGame({ username: userInputRef.current?.value ?? "" })
            if (response.success) {
                const game = await getGame({ id: response.data.game?.gameId ?? "" })

                if (game.success) {
                    router.push("/game")
                    setPlayGame(true)
                    setGame(game.data.game as GameResponseModel)
                }
            } else {
                setToastify({ status: "error", text: "Lütfen kullanıcı adınızı giriniz" })
            }

        } catch (error) {
            console.log("error", error);
        }


    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className='play'>
            <div className="wrapper">
                <div className='title'>
                    <h1>{t("Home.title")}</h1>
                    <p>{t("Home.description")}</p>
                </div>
                <form onSubmit={handleStart}>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faUser} fontSize={24} color='#12c2e9' />
                        <input ref={userInputRef} type="text" placeholder='Username...' />
                    </label>
                    <Button text={t("Home.buttonText")} />
                </form>
            </div>
        </div>
    )
}

export default Play