import React from 'react'
import Image from 'next/image'
import Snowfall from 'react-snowfall'
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '/styles/Home.module.css'
import { HomeSocialIcon, MyPosition } from '../../Constant'

export default function Homepage() {
    return (
        <div className={styles.container_main}>
            <Snowfall />
            <div>
                <div className={styles.wrapper}>
                    <div className={`${styles.name} ${styles.bg}`}> Wang Yi </div>
                    <div className={`${styles.name} ${styles.fg}`}> Wang Yi </div>
                </div>
                <div className={styles.position}>
                    {MyPosition.map((letter, index) => (
                        <span className={styles.positionLetter} key={letter + index} style={letter === ' ' ? { ["--i" as string]: index, marginRight: '16px' } : { ["--i" as string]: index }}>{letter}</span>
                    ))}
                </div>
            </div>
            <div>
                {HomeSocialIcon.map((socialIcon, index) => (
                    <button key={index} className={styles.socialButton} onClick={() => window.open(socialIcon.link, '_blank')}>
                        <img src={`/png/social/${socialIcon.name}.png`} alt={socialIcon.name} className={styles.socialIcon} draggable={false} />
                    </button>
                ))}
            </div>
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
                className={styles.lottieAnima}
            />
        </div >
    )
}
