import React from 'react'
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import styles from '../../styles/Topbar.module.css'
import { TopBarGroup } from '../../Constant';

interface TopBarProps {
    selectedId?: number
}

const TopBar = ({ selectedId }: TopBarProps) => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {TopBarGroup.map((topBar, index) => (
                <div className={`${styles.topBar} ${selectedId === index + 1 && styles.selectedTopBar}`} key={index} onClick={() => router.push(topBar.link)}>
                    <Icon icon={topBar.icon} color={topBar.color} width="20" height="20" />
                    <div>{topBar.filename}</div>
                </div>
            ))}
        </div>
    )
}

export default TopBar