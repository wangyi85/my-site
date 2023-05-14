import React from 'react'
import styles from '/styles/Contact.module.css'
import { ContactList } from '../../Constant'

export default function ContactPage() {
    return (
        <div className={styles.container_main}>
            <div className={styles.mainBody}>
                <div className={styles.displaySection}>
                    <div className={styles.contactTitle}>Reach Out Via Socials</div>
                    <div className={styles.socialList}><span className={styles.colorBlue}>.socials</span> &nbsp;{'{'}</div>
                    {ContactList.map((contact) => {
                        return (
                            <div className={styles.socialList} key={contact.type}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.type}:&nbsp;<span className={styles.colorBlue} onClick={() => { window.open(contact.link, '_blank') }}>{contact.name}</span>;</div>
                        )
                    })}
                    <div className={styles.socialList}>{'}'}</div>
                </div>
                <div className={styles.listSection}>
                </div>
            </div>
        </div>
    )
}
