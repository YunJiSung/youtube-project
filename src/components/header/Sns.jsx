import React from 'react'

import { snsText } from '../../data/header';

const Sns = () => {
    return (
        <div className='heder__sns'>
            <ul>
                {snsText.map((sns, key) => (
                    <li key={key}>
                        <a
                            href="https://github.com/YunJiSung/webs2024"
                            target='_blank'
                            rel='nonopener noreferrer'
                        >
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns