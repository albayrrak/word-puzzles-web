import React from 'react'
import "./style.scss"
interface IProps {
    word: string;
    classnames: string;
}
const WordBox: React.FC<IProps> = ({ word, classnames }) => {
    return (
        <span className={'word-box ' + (classnames ? classnames : "")}>{word}</span>
    )
}

export default WordBox