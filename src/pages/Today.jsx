import React from 'react'

import { todayText } from '../data/today'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

const Today = () => {
    return (
        <Main
            title="오늘의 추천 영상"
            description="오늘의 추천 유튜브 영상입니다."
        >
            <section id='todayPage'>
                <h2>🤩 오늘의 추천 픽!!!</h2>
                {todayText.map((today, key) => (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb video__thumb play__icon">
                            <Link
                                to={`/video/${today.videoId}`}
                                style={{ backgroundImage: `url(${today.img})` }}
                            >
                            </Link>
                        </div>
                        <div className="today__text">
                            <span className='today'>오늘의 픽!</span>
                            <h3 className='title'>
                                <Link to={`/video/${today.videoId}`}>
                                    {today.title}
                                </Link>
                            </h3>
                            <p className='desc'>{today.desc}</p>
                            <div className='info'>
                                <span className='author'>
                                    <Link to={`/channel/${today.channelId}`}>
                                        {today.author}
                                    </Link>
                                </span>
                                <span className='data'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </section>
        </Main>
    )
}

export default Today