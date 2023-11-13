import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CiFries } from "react-icons/ci";

import { menuText } from '../../data/header'




const Menu = () => {
    const location = useLocation();
    return (
        <nav className="heder__menu">
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu