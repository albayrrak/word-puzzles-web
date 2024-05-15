"use client"
import React, { Ref, RefObject, useRef } from 'react'
import "./style.scss"

interface IProps {
    handleStart: (username: string) => void
    classNames?: string;
}

const Play: React.FC<IProps> = ({ handleStart, classNames }) => {
    const userInputRef = useRef<HTMLInputElement>(null)

    return (
        <div className={'play ' + (classNames ? classNames : "")}>
            <div className='title'>
                <h1>Kelime Avı: Zihin Jimnastiği Oyunu</h1>
                <p>Kelime Avı, zihinsel becerilerinizi sınamak ve kelime dağarcığınızı geliştirmek için harika bir yol! Bu bağımlılık yapıcı oyun, farklı zorluk seviyelerinde yüzlerce kelime bulmacasını içerir. Hızınızı ve kelime bilginizi test edin, yeni kelimeler öğrenin ve beyin jimnastiği yaparken eğlenin!</p>
            </div>
            <div className='form'>
                <input ref={userInputRef} type="text" placeholder='Username' />
                <button onClick={() => handleStart(userInputRef.current?.value ?? "")} className='btn secondary'>Oyuna Başla</button>
            </div>
        </div>
    )
}

export default Play