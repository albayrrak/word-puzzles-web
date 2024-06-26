"use client"
import React, { useEffect, useState } from 'react'
import Loading from '@/views/components/loading'
import Play from '@/views/sections/home/components/play'
import Aside from '@/views/layouts/aside'

import "./style.scss"

const HomeSection = () => {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 3000)
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <section className='home'>
            <Aside />
            <Play />
        </section>
    )
}

export default HomeSection