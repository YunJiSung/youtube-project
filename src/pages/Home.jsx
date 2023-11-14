import React from 'react'

import { travelerText } from '../data/traveler'
import { Link } from 'react-router-dom'
import { todayText } from '../data/today'
import Today from '../components/contents/Today'
import Traveler from '../components/contents/Traveler'


const Home = () => {
    return (
        <>
            <Today />
            <Traveler />


        </>
    )
}

export default Home