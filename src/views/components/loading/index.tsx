"use client"
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl';

import "./style.scss"
const Loading = () => {
    const t = useTranslations("Loading")


    return (
        <div className='loading'>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
        </div>
    )
}

export default Loading