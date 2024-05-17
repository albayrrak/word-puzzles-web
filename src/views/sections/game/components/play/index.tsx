"use client"
import React, { useRef } from 'react'
import "./style.scss"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/views/components/button'
import { getGame, startGame } from '@/actions/api'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'



const Play = () => {
    const { setGame, setPlayGame, setToastify } = useStore(state => state)
    const userInputRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

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

    return (
        <div className='play'>

            <div className="wrapper">
                <div className='title'>
                    <h1>Kelime Avı: Zihin Jimnastiği Oyunu</h1>
                    <p>Kelime Avı, zihinsel becerilerinizi sınamak ve kelime dağarcığınızı geliştirmek için harika bir yol! Bu bağımlılık yapıcı oyun, farklı zorluk seviyelerinde yüzlerce kelime bulmacasını içerir. Hızınızı ve kelime bilginizi test edin, yeni kelimeler öğrenin ve beyin jimnastiği yaparken eğlenin!</p>
                </div>
                <hr />
                <form onSubmit={handleStart}>
                    <div>
                        <h4>Kullanıcı adı girin ve oyuna başlayın</h4>
                    </div>
                    <label htmlFor="">
                        <FontAwesomeIcon icon={faUser} fontSize={24} color='#12c2e9' />
                        <input ref={userInputRef} type="text" placeholder='Username...' />
                    </label>
                    <Button text='Giriş Yap' />
                </form>
            </div>

        </div>
    )
}

export default Play