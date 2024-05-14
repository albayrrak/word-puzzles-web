import React from 'react'

import "./style.scss"
import RankBox from '@/views/components/rank-box'
const Aside = () => {
    return (
        <aside>
            <div className='top'>
                <h1>Rank Top 3</h1>
                <RankBox />
                <RankBox />
                <RankBox />

            </div>
            <div className='top'>
                <h1>Rank Top 10</h1>
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
                <RankBox />
            </div>
        </aside>
    )
}

export default Aside
