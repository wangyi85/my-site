import React from 'react'
import Image from 'next/image'
import styles from 'styles/Header.module.css'
import { HeaderNavbarGroup, HeaderButtonColor } from '../../Constant'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.navbarGroup}>
                    <Image src="/png/vscode.png" alt='vscode' width={17} height={17} draggable={false} />
                    {HeaderNavbarGroup.map((navbar: string) => {
                        return (
                            <div key={navbar} className={styles.navbar}>{navbar}</div>
                        )
                    })}
                </div>
                <div className={styles.headerTitle}>Wang Yi - Visual Studio Code</div>
                <div className={styles.headerBtnGroup}>
                    {HeaderButtonColor.map((buttonColor: string) => {
                        return (
                            <div key={buttonColor}>
                                <button className={styles.headerBtn} />
                                <style jsx>{`
                                    button {
                                        background-color: ${buttonColor}
                                    }
                                `}</style>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Header