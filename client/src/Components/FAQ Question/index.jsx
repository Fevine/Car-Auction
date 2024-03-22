import React from 'react'
import style from './index.module.scss'

function Question({ children, question, currentQuestion, setCurrentQuestion, questionOrder }) {

    function handleQuestion(order) {
        setCurrentQuestion(order)
    }

    return (
        <div id={style.Question}>
            <div className={style.titleBox} onClick={()=>handleQuestion(questionOrder)}>
                <i className="fa-solid fa-plus"></i>
                <h2 className={`${style.ques}`}>{question} ?</h2>
            </div>
            <div className={`${style.question} ${ currentQuestion===questionOrder ? style.active : null}`}>
                {children}
            </div>
        </div>
    )
}

export default Question
