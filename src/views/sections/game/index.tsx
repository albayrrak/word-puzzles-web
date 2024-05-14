"use client"
import React, { useEffect } from 'react'
import "./style.scss"
const GameSection = () => {


    return (
        <section className='game'>
            <div className='title'>
                <h1>Kelime Avı: Zihin Jimnastiği Oyunu</h1>
                <p>Kelime Avı, zihinsel becerilerinizi sınamak ve kelime dağarcığınızı geliştirmek için harika bir yol! Bu bağımlılık yapıcı oyun, farklı zorluk seviyelerinde yüzlerce kelime bulmacasını içerir. Hızınızı ve kelime bilginizi test edin, yeni kelimeler öğrenin ve beyin jimnastiği yaparken eğlenin!</p>
            </div>

            <div className='result'>
                <div className='timer'>
                    <span>Timer:</span>
                    <span>60</span>
                </div>
                <div className='point'>
                    <span>Point:</span>
                    <span>0</span>
                </div>
            </div>
            <div className='words'>
                <div className="word-box">
                    <h4>A</h4>
                </div>
                <div className="word-box">
                    <h4>Ç</h4>
                </div>
                <div className="word-box">
                    <h4>M</h4>
                </div>
            </div>
            <div className='text'>
                <input type="text" />
            </div>

        </section>
    )
}

export default GameSection