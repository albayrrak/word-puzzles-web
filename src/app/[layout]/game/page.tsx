"use client"
import Loading from '@/views/components/loading'
import GameSection from '@/views/sections/game'
import React, { useEffect, useState } from 'react'

const Game = () => {
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 4000)
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <main>
            <GameSection />
        </main>
    )
}

export default Game