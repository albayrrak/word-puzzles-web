"use client"
import Loading from '@/views/components/loading'
import HomeSection from '@/views/sections/home'
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
            <HomeSection />
        </main>
    )
}

export default Game