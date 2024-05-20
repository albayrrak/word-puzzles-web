import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MdScore } from 'react-icons/md';
import "./style.scss"
import { useTranslations } from 'next-intl';

interface IProps {
    title: string;
    icon: React.ReactNode
    data: GameResponseModel[]
}
const RankBox: React.FC<IProps> = ({ title, icon, data }) => {
    const t = useTranslations("Aside")
    return (
        <div className='box' >
            <div className='title'>
                <div className='icon'>
                    {icon}
                </div>
                <h4>{title}</h4>
            </div>
            {data && data.length > 0 && data.map((x, i) =>
                <div key={i} className='list' style={{ animationDelay: `${0.5 * (i + 1)}s` }}>
                    <div className='info'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faUser} fontSize={16} />
                        </div>

                        <div className="text">
                            <h4>{t("username")}</h4>
                            <span>{x.player.username}</span>

                        </div>
                    </div>
                    <div className='info'>
                        <div className='icon'>
                            <MdScore size={35} />
                        </div>
                        <div className="text">
                            <h4>{t("score")}</h4>
                            <span>{x.score}</span>

                        </div>
                    </div>

                </div>
            )}

        </div>
    )
}

export default RankBox