import React, { useState } from 'react'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCreative, Autoplay, Pagination } from "swiper";
import styles from '/styles/Experience.module.css'
import { ExperienceHistory } from '../../Constant';
import "swiper/css";
import "swiper/css/effect-cards";

export default function ExperiencePage() {
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const slideTo = (index: number) => {
        swiperRef.slideTo(index - 1, 0);
    };
    return (
        <div className={styles.container_main}>
            <div className={styles.mainBody}>
                <div className={styles.displaySection}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        effect={"cards"}
                        grabCursor
                        modules={[EffectCards]}
                        className={styles.swiper}
                    >
                        {ExperienceHistory.map((experience, index) => {
                            return (
                                <SwiperSlide className={styles.swiper_slide} key={index + experience.project}>
                                    <div className={styles.card_cover} style={{ ["--background" as string]: `url(/png/experience/${experience.pathImage[0]}/1.png)` }}></div>
                                    <div className={styles.card_body}>
                                        <div>
                                            <div className={styles.card_top}>
                                                <div className={styles.job_position}>{experience.position}</div>
                                                <div className={styles.title_group}>
                                                    <div className={styles.card_title}>{experience.project}</div>
                                                    <div className={styles.duration}>{experience.duration}</div>
                                                </div>
                                                <div className={styles.icon_group}>
                                                    {experience.icons.map((icon, map) => (
                                                        <Icon icon={icon.type} color="lightgray" className={styles.icon} width="22" height="22" key={index + icon.link} onClick={() => { window.open(icon.link, "_blank") }} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={styles.card_middle}>
                                                <div className={styles.sub_swiper}>
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
                                                        className={styles.sub_swiper_body}
                                                    >
                                                        {experience.pathImage.map((image, index) => {
                                                            return (
                                                                <SwiperSlide className={styles.sub_swiper_slide} key={index + image}>
                                                                    <Image src={`/png/experience/${image}/${index + 1}.png`} layout="fill" alt='Cannabis' />
                                                                </SwiperSlide>
                                                            )
                                                        })}
                                                    </Swiper>
                                                </div>
                                                <div>
                                                    <div className={styles.about_text}>ABOUT</div>
                                                    <div className={styles.description}>{experience.aboutText}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className={styles.achievements}>ACHIEVEMENTS</div>
                                            <ul className={styles.card_bottom}>
                                                {experience.achievements.map((achievement, index) => {
                                                    return (
                                                        <li key={index + achievement}>{achievement}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className={styles.education}>
                        <div className={styles.education_title}>Bachelor of Computer Science</div>
                        <div className={styles.education_header}>
                            <Image src="/png/experience/education.jpg" alt='education' width={100} height={100} />
                            <div className={styles.education_duration}>09/2013 - 07/2017</div>
                        </div>
                    </div>
                </div>
                <div className={styles.listSection}>
                    {ExperienceHistory.map((experience, index) => {
                        return (
                            <button onClick={() => slideTo(index + 1)} className={styles.list_button} key={experience.project}>
                                <div className={styles.listButton_title}>{experience.position}</div>
                                <div className={styles.listButton_project}>{experience.project}</div>
                                <div className={styles.listButton_duration}>{experience.duration}</div>
                            </button>
                        )
                    })}
                </div>
            </div >
        </div >
    )
}