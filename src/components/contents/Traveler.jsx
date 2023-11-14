import React from 'react'
import { Link } from 'react-router-dom'

import { travelerText } from '../../data/traveler'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Traveler = () => {
    return (
        <section id='traveler'>
            <h2>오늘의 추천 픽!!!</h2>
            <div className="traveler__inner">
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 9,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"

                >
                    {travelerText.map((traveler, key) => (
                        <SwiperSlide>
                            <div className='traveler play__icon' key={key}>
                                <div className="traveler__img">
                                    <Link to={`/channel/${traveler.channelId}`}>
                                        <img src={traveler.img} alt={traveler.author} />
                                    </Link>

                                </div>
                                <div className='traveler__info'>{traveler.author}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Traveler