import React from 'react';

import './menu-tem.styles.scss';

const MenuItem = ({ title, image, size }) => (
    <div
    className={`${size} menu-item`}>
        <div className='background-image'
        style={{
        backgroundImage: `url(${image})`
    }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </div>
);

export default MenuItem;