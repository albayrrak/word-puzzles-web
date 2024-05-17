"use client"
import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

import "./style.scss"
import { useStore } from '@/store/store'


const Toastify = () => {


    const { toastify, setToastify } = useStore(x => x)

    useEffect(() => {

        if (toastify) {
            setTimeout(() => {
                setToastify(undefined)
            }, 4000)
        }

        // return () => {
        //     setToastify(undefined)
        // }

    }, [toastify])
    return (
        <div className={'toastify ' + (toastify ? "active " : "") + (toastify?.status)}>
            <div className='icon error'>
                <FontAwesomeIcon icon={faXmark} fontSize={24} color='#fff' />
            </div>
            <div className='icon success'>
                <FontAwesomeIcon icon={faCheck} fontSize={24} color='#fff' />
            </div>
            <h4>{toastify?.text}</h4>
        </div>
    )
}

export default Toastify