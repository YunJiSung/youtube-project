import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/api'; // fetchFromAPI 함수와 BASE_URL을 import
import Today from '../components/contents/Today'
import Traveler from '../components/contents/Traveler'
import Main from '../components/section/Main'
import VideoSlider from '../components/video/VideoSlider.jsx';


const Home = () => {
    const [channelVideo, setChannelVideo] = useState([]);

    useEffect(() => {
        const v1 = "UCag-vLxfCjAUNebW9gA0yRg";


        const fetchResults = async () => {
            try {
                const videosData = await fetchFromAPI(`search?channelId=${v1}&part=snippet&order=data`);
                setChannelVideo(videosData.items);
                console.log(videosData.items);
            } catch (error) {
                console.log('Eroor fetching data', error)
            }
        };

        fetchResults();
    }, []);


    return (
        <Main
            title="여행 유튜버"
            description="여행 유튜버 모음 사이트에 오신것을 환영합니다"
        >
            <Today />
            <Traveler />

            <VideoSlider videos={channelVideo} title='조튜브 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo} title='조튜브 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo} title='조튜브 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo} title='조튜브 최신 영상' name='v1' />
            <VideoSlider videos={channelVideo} title='조튜브 최신 영상' name='v1' />
        </Main>
    )
}

export default Home