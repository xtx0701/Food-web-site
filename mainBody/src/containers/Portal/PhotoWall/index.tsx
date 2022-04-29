import React, { useState, useEffect } from 'react'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import cssObj from './index.module.css'

export default function PhotoWall() {

    // 定义变量保存窗口宽度
    const [windowWidth, setwindowWidth] = useState(0);
    // 每次组件挂载完毕自动获取宽度调整
    useEffect(() => {
        const Heigth = document.body.clientWidth;
        setwindowWidth(windowWidth => windowWidth = Heigth);
    }, [])

    return (
        <div style={{ width: windowWidth }}> <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            loop
            slidesPerView='auto'
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={cssObj.photoBox}
        >
            <SwiperSlide className={cssObj.photo}><img src="https://i3.meishichina.com/attachment/magic/2020/04/07/2020040715862270271858197577.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={cssObj.photo}><img src="https://i3.meishichina.com/attachment/magic/2020/03/10/2020031015838279888678197577.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={cssObj.photo}><img src="https://i3.meishichina.com/attachment/magic/2020/03/03/2020030315832190036478197577.jpg" alt="" /></SwiperSlide>
            <SwiperSlide className={cssObj.photo}><img src="https://i3.meishichina.com/attachment/magic/2022/03/17/2022031716475014147921.jpg" alt="" /></SwiperSlide>
        </Swiper></div>
    )
}
