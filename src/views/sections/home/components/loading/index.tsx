import React from 'react'
import "./style.scss"

interface IProps {
    classNames?: string;
}

const Loading: React.FC<IProps> = ({ classNames }) => {
    const word = "WORD PUZZLES"

    return (
        <div className={"loading " + (classNames ? classNames : "")}>
            {word.split("").map((x, i) => <span style={{ animationDelay: `${0.1 * (i + 2)}s` }}>{x}</span>)}

            <p>"Your game is about to start shortly, please wait."</p>

        </div >
    )
}

export default Loading