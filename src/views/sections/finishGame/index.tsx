"use client"
import React from 'react'

import "./style.scss"
import { useStore } from '@/store/store'
const FinishGame = () => {
    const { finishGame } = useStore(state => state)
    return (
        <div className={'finish-game ' + (finishGame ? "show" : "")}> FinishGame</div >
    )
}

export default FinishGame