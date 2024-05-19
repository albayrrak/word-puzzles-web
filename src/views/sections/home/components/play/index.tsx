"use client"
import React, { useRef } from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/views/components/button'
import { getGame, startGame } from '@/actions/api'
import { useStore } from '@/store/store'
import { useRouter, useParams } from 'next/navigation'
import { useTranslations } from 'next-intl';


import "./style.scss"



const Play = () => {
    const { setGame, setToastify } = useStore(state => state)
    const userInputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const params = useParams()

    const t = useTranslations("Home")


    const handleStart = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await startGame({ username: userInputRef.current?.value ?? "", lang: params.layout as string })
            if (response.success) {
                const game = await getGame({ id: response.data.game?.gameId ?? "" })

                if (game.success) {
                    router.push("/game")
                    setGame(game.data.game as GameResponseModel)
                }
            } else {
                setToastify({ status: "error", text: "Lütfen kullanıcı adınızı giriniz" })
            }

        } catch (error) {
            console.log("error", error);
        }


    }


    return (
        <div className='play'>
            <div className="wrapper">
                <div className='title'>
                    <h1>{t("title")}</h1>
                    <p>{t("description")}</p>
                </div>
                <form onSubmit={handleStart}>

                    <label htmlFor="">
                        <FontAwesomeIcon icon={faUser} fontSize={24} color='#12c2e9' />
                        <input ref={userInputRef} type="text" placeholder='Username...' />
                    </label>
                    <Button text={t("buttonText")} />
                </form>
            </div>
        </div>
    )
}

export default Play