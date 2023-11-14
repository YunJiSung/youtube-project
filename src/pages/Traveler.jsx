import React from 'react'
import { travelerText } from '../data/traveler'
import { Link } from 'react-router-dom'

const Youtuber = () => {
    return (
        <section id='traveler'>
            <h2>오늘의 추천 픽!!!</h2>
            <div className='traveler__inner'>
                {travelerText.map((traveler, key) => (
                    <div className='traveler play__icon' key={key}>
                        <div className="traveler__img">
                            <Link to={`/channel/${traveler.channelId}`}>
                                <img src={traveler.img} alt={traveler.author} />
                            </Link>

                        </div>
                        <div className='traveler__info'>{traveler.author}</div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Youtuber