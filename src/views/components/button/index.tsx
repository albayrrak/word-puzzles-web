import React from 'react'

import "./style.scss";

interface IProps {
    text: string;
    onClick?: () => void
}
const Button: React.FC<IProps> = ({ text, onClick }) => {
    return (
        <button className='btn' onClick={onClick}>{text}</button>
    )
}

export default Button