import React from 'react'
import { PiRankingFill } from "react-icons/pi";


import "./style.scss"
const RankBox = () => {
    return (
        <div className='rank'>
            <div className='rate'>
                <h4>1</h4>
            </div>

            <div className='information'>
                <h4>User Name</h4>

                <div className='icon'>
                    <PiRankingFill fontSize={36} />
                </div>
            </div>

        </div>
    )
}

export default RankBox