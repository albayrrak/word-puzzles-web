"use client"
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useTranslation } from 'react-i18next'
const Loading = () => {
    const [mounted, setMounted] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <div className='loading'>
            <h1>{t("Loading.title")}</h1>
            <p>{t("Loading.description")}</p>
        </div>
    )
}

export default Loading