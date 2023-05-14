import React from 'react'
import Head from 'next/head'
import { TopBar, SkillPage } from '../components'
import styles from '/styles/Skill.module.css'

export default function skill() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Green Dream | Skill</title>
                <meta name="description" content="Green Dream | Senior Dev Team" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={3} />
            <SkillPage />
        </div>
    )
}
