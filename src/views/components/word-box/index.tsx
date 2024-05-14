import React from 'react'
import "./style.scss"
interface IProps {
    word: string;
}
const WordBox: React.FC<IProps> = ({ word }) => {
    return (
        <span className='word-box'>{word}</span>
    )
}

export default WordBox