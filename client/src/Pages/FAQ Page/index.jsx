import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import MailBox from '../../Layouts/Home Layouts/Mail Box';
import PageTitle from '../../Components/Common Components/PageTitle';
import Question from '../../Components/FAQ Question';
import { useQuery } from '../../Context/queryContext';

function FAQPage() {

    const { Queries, setQueries, isLoading } = useQuery()

    const [currentQuestion, setCurrentQuestion] = React.useState(0)

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>FAQPage</title>
            </Helmet>
            <div id={style.FAQPage}>
                <PageTitle title={"FAQ"} />

                <div className={style.container}>
                    {isLoading ? <span>Loading...</span> : Queries.map((query, i) => (
                        <Question key={query._id} questionOrder={i + 1} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} question={query.question} >{query.answer}</Question>
                    ))}
                </div>

                <MailBox />
            </div>
        </>
    )
}

export default FAQPage