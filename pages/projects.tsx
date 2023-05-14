import React from 'react'
import Head from 'next/head'
import { TopBar, ProjectsPage } from '../components'
import styles from '/styles/Projects.module.css'

export default function projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Green Dream | Projects</title>
                <meta name="description" content="Green Dream | Senior Dev Team" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={4} />
            <ProjectsPage />
        </div>
    )
}
