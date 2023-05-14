import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination } from "swiper";
import { ProjectsDetail } from '../../Constant';
import styles from '../../styles/Projects.module.css'

export default function ProjectsPage() {
    return (
        <div className={styles.container_main}>
            <div className={styles.mainBody}>
                <div className={styles.displaySection}>
                    {ProjectsDetail.map((project) => {
                        return (
                            <div key={project.project} className={styles.projectDetail}>
                                <div className={styles.swiperSection}>
                                    <Swiper
                                        grabCursor
                                        effect={"creative"}
                                        creativeEffect={{
                                            prev: {
                                                shadow: true,
                                                origin: "left center",
                                                translate: ["-5%", 0, -200],
                                                rotate: [0, 100, 0]
                                            },
                                            next: {
                                                origin: "right center",
                                                translate: ["5%", 0, -200],
                                                rotate: [0, -100, 0]
                                            }
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false
                                        }}
                                        loop
                                        modules={[EffectCreative, Autoplay, Pagination]}
                                        className={styles.swiper_body}
                                    >
                                        {project.pathImage.map((image, index) => {
                                            return (
                                                <SwiperSlide className={styles.swiper_slide} key={index + image}>
                                                    <Image src={`/png/experience/${image}/${index + 1}.png`} layout="fill" alt={image} />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div className={styles.detailSection}>
                                    <div className={styles.titleGroup}>
                                        <div className={styles.projectTitle}>{project.project}</div>
                                        <Icon icon="icon-park-outline:external-transmission" className={styles.projectLink} onClick={() => { window.open(project.link, '_blank') }} />
                                    </div>
                                    <div className={styles.projectDescription}>{project.description}</div>
                                    <div className={styles.skillSet}>
                                        {project.skills.map((skill, index) => {
                                            return (
                                                <img src={skill} alt="skills set" key={index} className={styles.skillSetImage} draggable={false} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.listSection}>
                    {ProjectsDetail.map((project) => {
                        return (
                            <div key={project.project} className={styles.projectList} onClick={() => { window.open(project.link, '_blank') }}>
                                <div className={styles.listTitle}>{project.project}</div>
                                <Icon icon="icon-park-outline:external-transmission" className={styles.projectLink} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
