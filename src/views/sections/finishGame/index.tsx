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
import Loading from '@/views/components/loading'
import { useTranslations } from 'next-intl'
const FinishGame = () => {
    const [loading, setLoading] = useState(true)
    const { game } = useStore(state => state)
    const [topRank, setTopRank] = useState<GameResponseModel[]>([])
    const t = useTranslations("Finish")
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
        setTimeout(() => { setLoading(false) }, 3000)
    }, [])


    if (loading) {
        return <Loading />
    }


    return (
        <section className='result'>
            <div className="wrapper">
                <div className="title">
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCheck} fontSize={48} color='#69d669' />
                    </div>
                    <h1>{t("title")} <br />{game?.player?.username}</h1>
                    <h4>{t("totalScore")} : <span>{game?.score}</span> </h4>
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
                                            <h4>{t("username")}</h4>
                                            <span>{x.player.username}</span>

                                        </div>
                                    </div>
                                    <div className='info'>
                                        <div className='icon'>
                                            <MdScore size={35} color='#fff' />
                                        </div>
                                        <div className="text">
                                            <h4>{t("score")}</h4>
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