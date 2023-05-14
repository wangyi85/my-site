import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { TopBar, ExperiencePage } from '../components'
import styles from '/styles/Experience.module.css'


const experience: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Green Dream | Experience</title>
                <meta name="description" content="Green Dream | Senior Dev Team" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={2} />
            <ExperiencePage />
        </div>
    )
}

export default experience