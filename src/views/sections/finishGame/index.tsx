"use client"
import React, { useEffect, useState } from 'react'

import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '@/store/store'
import { getTopRank } from '@/actions/api'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import { MdScore } from 'react-icons/md'
const FinishGame = () => {
    const { game } = useStore(x => x)
    const [topRank, setTopRank] = useState<GameResponseModel[]>([])

    useEffect(() => {
        const topRank = async () => {
            try {
                const response = await getTopRank({ count: 3 })
                if (response.success) {
                    setTopRank(response.data.game ?? [])
                }

            } catch (error) {
                console.log(error);

            }
        }
        topRank()
    }, [])
    console.log(topRank);


    return (
        <section className='result'>
            <div className="wrapper">
                <div className="title">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCheck} fontSize={48} color='#69d669' />
                    </div>
                    <h1>Tebrikler! <br />YUCEL ALBAYRAK </h1>
                    <h4>TAM <span>360 PUAN</span> TOPLADINIZ </h4>
                </div>
                <div className="rank-swiper">
                    <Swiper direction='vertical' autoplay={{ delay: 2500, disableOnInteraction: false }} modules={[Autoplay]} spaceBetween={16}>
                        {topRank.map((x, index) =>
                            <SwiperSlide>
                                <div className='content'>
                                    <h4>{index + 1}</h4>
                                    <div className='info'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon={faUser} fontSize={25} color='#fff' />

                                        </div>

                                        <div className="text">
                                            <h4>Kullanıcı Adı</h4>
                                            <span>{x.player.username}</span>

                                        </div>
                                    </div>
                                    <div className='info'>
                                        <div className='icon'>
                                            <MdScore size={35} color='#fff' />
                                        </div>
                                        <div className="text">
                                            <h4>Skor</h4>
                                            <span>{x.score}</span>

                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )}

                    </Swiper>

                </div>

            </div>
        </section>
    )
}

export default FinishGame