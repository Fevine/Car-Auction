import React from 'react'
import style from './index.module.scss'

function Question({ children, question, currentQuestion, setCurrentQuestion, questionOrder }) {

    function handleQuestion(order) {
        if (order === currentQuestion) {
            setCurrentQuestion(0)
            return
        }
        setCurrentQuestion(order)
    }

    return (
        <div id={style.Question}>
            <div className={style.titleBox} onClick={() => handleQuestion(questionOrder)}>
                <i className={`fa-solid fa-${currentQuestion === questionOrder ? 'minus' : 'plus'}`}></i>
                <h2 className={`${style.ques}`}>{question} ?</h2>
            </div>
            <p className={`${style.question} ${currentQuestion === questionOrder ? style.active : null}`}>
                {children}
            </p>
        </div>
    )
}

export default Question
