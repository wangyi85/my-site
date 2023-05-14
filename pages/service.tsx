import React from 'react'
import Head from 'next/head'
import { ServicePage, TopBar } from '../components'
import styles from '/styles/Service.module.css'

export default function Service() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Green Dream | Service</title>
                <meta name="description" content="Green Dream | Senior Dev Team" />
                <link rel="icon" href="ico/home.ico" />
            </Head>
            <TopBar selectedId={5} />
            <ServicePage />
        </div>
    )
}
