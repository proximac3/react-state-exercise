import React, {useState} from 'react'
import './eightBall.css';
import {randomAnswer} from './helpers.js'

const EightBall = (props) => {
    const [startingQuestion] = useState('Think of a question')
    const [currentColor, changeColor] = useState('black')
    const [question, answerQuestion] = useState(startingQuestion)

    const answers = randomAnswer(props.answers)

    return (
        <div className="eightBall-ball"
            style={{ backgroundColor: currentColor}}
            onClick={() => [answerQuestion(answers.msg), changeColor(answers.color)]}>

            <h1 className="EightBall-question"> {question}</h1>
        </div>
    )
}

export default EightBall
