import React from 'react'
import { Icon } from '@iconify/react';
import styles from 'styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.leftSide}>
                    <div className={`${styles.mainFork} ${styles.hoverEffect}`}>
                        <Icon icon="cil:fork" width="16" height="16" />
                        <div>main*</div>
                    </div>
                    <div className={`${styles.statusGroup} ${styles.hoverEffect}`}>
                        <Icon icon="carbon:close-outline" width="16" height="16" />
                        <div>0</div>
                        <Icon icon="akar-icons:triangle-alert" width="14" height="14" />
                        <div>1</div>
                        <Icon icon="ant-design:info-circle-outlined" width="16" height="16" />
                        <div>2</div>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.hoverEffect}>@Green Dream</div>
                    <div className={`${styles.prettier} ${styles.hoverEffect}`}>
                        <Icon icon="akar-icons:double-check" width="16" height="16" />
                        <div>Prettier</div>
                    </div>
                    <div className={styles.hoverEffect}>
                        <Icon icon="codicon:bell" width="15" height="15" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
