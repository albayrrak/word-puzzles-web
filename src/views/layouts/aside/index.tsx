import React, { useEffect, useState } from 'react'

import "./style.scss"
import RankBox from '@/views/components/rank-box'
import { GiChampions } from 'react-icons/gi'
import { getTopRank } from '@/actions/api'

import { GrLanguage } from "react-icons/gr";
import { useTranslations } from 'next-intl'
import { Language } from '@/models/enums'
import { usePathname, useRouter } from "next/navigation"



const Aside = () => {
    const [champ, setChamp] = useState<GameResponseModel[]>([])
    const [topTen, setTopTen] = useState<GameResponseModel[]>([])
    const pathname = usePathname()
    const router = useRouter()

    const t = useTranslations("Aside")

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
            <RankBox title={t("winner")} icon={<GiChampions fontSize={24} />} data={champ} />
            <RankBox title={t("ranks")} icon={<GiChampions fontSize={24} />} data={topTen} />

            <div className='settings'>
                <div className='icon'>
                    <GrLanguage fontSize={16} color='#fff' />
                    <h4>{t("language")}</h4>
                </div>
                <select name="language" onChange={(e) => router.push(`/${e.target.value}`)}>
                    <option value="tr" selected={pathname === Language.TR ? true : false}>{pathname === Language.TR ? "Türkçe" : "Turkish"}</option>
                    <option value="en" selected={pathname === Language.EN ? true : false}>{pathname === Language.EN ? "English" : "İngilizce"}</option>
                </select>
            </div>

        </aside>
    )
}

export default Aside
