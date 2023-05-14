import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from 'react-star-ratings';
import { EffectCube, Navigation } from "swiper";
import styles from '../../styles/Skill.module.css'
import { SkillGroup } from '../../Constant';
import useSwiperRef from '../../Hook';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

export default function SkillPage() {
    const [nextEl, nextElRef] = useSwiperRef();
    const [prevEl, prevElRef] = useSwiperRef();
    const [swiperRef, setSwiperRef] = useState<any>(null);
    const slideTo = (index: number) => {
        swiperRef.slideTo(index, 0);
    };
    return (
        <div className={styles.container_main}>
            <div className={styles.mainBody}>
                <div className={styles.displaySection}>
                    <div className={styles.buttonGroup}>
                        <button className={styles.navigationButton} ref={prevElRef}><Icon icon="ic:round-navigate-before" /></button>
                        <button className={styles.navigationButton} ref={nextElRef}><Icon icon="ic:round-navigate-next" /></button>
                    </div>
                    <Swiper
                        onSwiper={setSwiperRef}
                        effect={"cube"}
                        loop
                        navigation={{
                            prevEl,
                            nextEl
                        }}
                        grabCursor
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        modules={[EffectCube, Navigation]}
                        className={styles.mySwiper}
                    >
                        {SkillGroup.map((skill) => {
                            return (
                                <SwiperSlide className={styles.swiperSlider} key={skill.title}>
                                    <div className={styles.typeTitle}>{skill.title}</div>
                                    <div className={styles.subjectsGroup}>
                                        {skill.subjects.map((subject, index) => (
                                            <div key={subject.name + index} className={styles.subjectGroup}>
                                                <div className={styles.subjectName}>{subject.name}</div>
                                                <StarRatings
                                                    numberOfStars={10}
                                                    rating={subject.rating}
                                                    starDimension="16px"
                                                    starSpacing="2px"
                                                    starRatedColor='#1779db'
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className={styles.listSection}>
                    {SkillGroup.map((skill, index) => {
                        return (
                            <button key={skill.title} className={styles.skillList} onClick={() => slideTo(index + 1)}>{skill.title}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}