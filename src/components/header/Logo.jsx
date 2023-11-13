import React from 'react'
import { MdTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className="heder__logo">
            <Link to="/">
                <em><MdTravelExplore /></em>
                <span>travel<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo