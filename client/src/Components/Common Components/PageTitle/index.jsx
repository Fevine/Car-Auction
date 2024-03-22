import React from 'react'
import style from './index.module.scss'

function PageTitle({title}) {
    return (
        <div id={style.pageTitle}>
            <span className={style.path}>Home / {title}</span>
            <h1 className={style.pageName}>{title}</h1>
        </div>
    )
}

export default PageTitle
