import React, { useEffect, useState } from 'react'

import "./style.scss"
import RankBox from '@/views/components/rank-box'
import { GiChampions } from 'react-icons/gi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { MdScore } from 'react-icons/md'
import { getTopRank } from '@/actions/api'
const Aside = () => {
    const [champ, setChamp] = useState<GameResponseModel[]>([])
    const [topTen, setTopTen] = useState<GameResponseModel[]>([])
    useEffect(() => {
        const getChampion = async () => {
            try {
                const response = await getTopRank({ count: 1 })
                if (response.success) {
                    return response.data.game
                }
            } catch (error) {
                console.log(error);

            }

        }
        const getTopTen = async () => {
            try {
                const response = await getTopRank({ count: 10 })
                if (response.success) {
                    return response.data.game
                }
            } catch (error) {
                console.log(error);

            }

        }

        Promise.all([getChampion(), getTopTen()]).then(([championResponse, topTenResponse]) => {
            setChamp(championResponse ?? [])
            setTopTen(topTenResponse ?? [])

        })


    }, [])


    return (
        <aside>
            <RankBox title='ŞAMPİYON' icon={<GiChampions fontSize={24} />} data={champ} />
            <RankBox title='TOP 10' icon={<GiChampions fontSize={24} />} data={topTen} />

            {/* <div className='box' >
                <div className='title'>
                    <div className='icon'>
                        <GiChampions size={24} color='#fff' />
                    </div>
                    <h4>TOP 10</h4>
                </div>
                <div className='list'>
                    <div className='info'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faUser} fontSize={16} color='#fff' />

                        </div>

                        <div className="text">
                            <h4>Kullanıcı Adı</h4>
                            <span>test</span>

                        </div>
                    </div>
                    <div className='info'>
                        <div className='icon'>
                            <MdScore size={35} color='#fff' />
                        </div>
                        <div className="text">
                            <h4>Skor</h4>
                            <span>60</span>

                        </div>
                    </div>

                </div>
            </div> */}

        </aside>
    )
}

export default Aside
