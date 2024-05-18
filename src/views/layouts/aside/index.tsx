import React, { useEffect, useState } from 'react'

import "./style.scss"
import RankBox from '@/views/components/rank-box'
import { GiChampions } from 'react-icons/gi'
import { getTopRank } from '@/actions/api'

import { GrLanguage } from "react-icons/gr";
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/helpers/global'

const Aside = () => {
    const [champ, setChamp] = useState<GameResponseModel[]>([])
    const [topTen, setTopTen] = useState<GameResponseModel[]>([])
    const [mounted, setMounted] = useState(false)
    const { t } = useTranslation()

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
            setMounted(true)

        })


    }, [])

    if (!mounted) {
        return null
    }


    return (
        <aside>
            <RankBox title={t("Aside.winner")} icon={<GiChampions fontSize={24} />} data={champ} />
            <RankBox title={t("Aside.ranks")} icon={<GiChampions fontSize={24} />} data={topTen} />

            <div className='settings'>
                <div className='icon'>
                    <GrLanguage fontSize={16} color='#fff' />
                    <h4>{t("Aside.language")}</h4>
                </div>
                <select name="language" onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="tr">Turkish</option>
                    <option value="en">English</option>
                </select>
            </div>


        </aside>
    )
}

export default Aside
