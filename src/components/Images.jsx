
import React from 'react';


export default function Images({ imageName }) {
    const imageList = [
        { name: 'white.svg', alt: 'Social Media Management', className: 'adv__image' },
        { name: 'red.svg', alt: 'Search Engine Optimization', className: 'adv__image' },
        { name: 'green.svg', alt: 'Design', className: 'adv__image' },
        { name: 'yellow.svg', alt: 'Ads', className: 'adv__image' },
        { name: 'monitor.svg', alt: 'Monitor', className: 'adv__image--icon' },
        { name: 'settings.svg', alt: 'Settings', className: 'adv__image--icon' },
        { name: 'pen-tool.svg', alt: 'Pen', className: 'adv__image--icon2' },
        { name: 'tv.svg', alt: 'TV', className: 'adv__image--icon2' },
        { name: 'home.jpg', alt: 'Make ur dream', className: 'images__img' },
        { name: 'star.svg', alt: 'Star', className: 'great__svg' },
        { name: 'profile.jpg', alt: 'Profile', className: 'item__image' },
        { name: 'mates.jpg', alt: 'Our teammate', className: 'mate__img' },
        { name: 'play-circle.svg', alt: 'Play button', className: 'link__image' },
        { name: 'byte-app.jpg', alt: 'Design Byte App', className: 'app__image' },
        { name: 'cloud-app.jpg', alt: 'Cloud App', className: 'app__image' },
        { name: 'furn-app.jpg', alt: 'Design Furniture App', className: 'app__image' },
        { name: 'arrow-right 1.svg', alt: 'Arrow', className: 'services__arrow' },
        { name: 'logo.svg', alt: 'logo' },
    ];

    const image = imageList.find((img) => img.name === imageName);

    if (!image) {
        return null; 
    }
    
    const imagePath = require(`../img/${image.name}`);

        return (
            <img 
                src={imagePath} 
                alt={image.alt} 
                className={image.className} 
            />
        );
}
