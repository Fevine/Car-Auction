import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import MailBox from '../../Layouts/Home Layouts/Mail Box';
import PageTitle from '../../Components/Common Components/PageTitle';
import Question from '../../Components/FAQ Question';

function FAQPage() {

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
                    <Question questionOrder={1} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} question={'Test'} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae laudantium minima iure dolores consequuntur in, laborum odit nemo fugit dolor nihil porro ea ut, ratione commodi? Molestias vero exercitationem quam assumenda repellendus, delectus rem eaque quidem, laborum, nostrum harum nam ab! Dolore, earum ab placeat velit ipsam harum architecto.</Question>
                    <Question questionOrder={2} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} question={'Test'} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae laudantium minima iure dolores consequuntur in, laborum odit nemo fugit dolor nihil porro ea ut, ratione commodi? Molestias vero exercitationem quam assumenda repellendus, delectus rem eaque quidem, laborum, nostrum harum nam ab! Dolore, earum ab placeat velit ipsam harum architecto.</Question>
                </div>

                <MailBox />
            </div>
        </>
    )
}

export default FAQPage