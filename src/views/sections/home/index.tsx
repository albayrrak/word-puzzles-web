"use client"
import React, { useEffect, useState } from 'react'
import Loading from '@/views/components/loading'
import Play from '@/views/sections/home/components/play'
import Aside from '@/views/layouts/aside'

import "./style.scss"

const GameSection = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 4000)
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <section className='home'>
            <Aside />
            <Play />
            {/* <Loading classNames={loading ? "show" : ""} />
                {!loading && playGame && <StartGame classNames={!loading && playGame ? "show" : ""} />} */}
        </section>
    )
}

export default GameSection