import React from 'react'
import { MdTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className="header__logo">
            <Link to="/">
                <em onClick={toggleMenu}><MdTravelExplore /></em>
                <span>travel<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo;
