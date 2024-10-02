import React from 'react'
import Images from '../components/Images'


export default function Main() {
    return (
        <main>
        <section class="home">
            <div class="home__wrapper">
                <h2 class="home__heading">Make your dream 
                    business goal come true</h2>
                <p class="home__text">when you need us for improve your business,
                    then come with us to help your business have reach it, you just sit and feel that goal</p>
                <a href="#" class="home__link">Start Project</a>
                <div class="home__images images">
                    <Images imageName="home.jpg" altText="Make ur dream" className="images__img"/>
                    <div class="images__great great">
                        <div class="great__wrapper">
                            <Images imageName="star.svg" altText="Star" className="great__svg"/>
                            <p class="great__heading">GREAT PROJECT</p>
                        </div>
                        <p class="great__text">800+ Done</p>
                    </div>
                    <div class="images__port port">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg" altText="Profile" className="item__image"/>
                            <div class="item__texts">
                                <h4 class="item__name">Angel Rose</h4>
                                <p class="item__proff">Creative Manager</p>
                            </div>
                        </div>
                        <p class="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="about__wrapper">
                <h2 class="about__heading">About Us</h2>
                <h3 class="about__subtitle">Our Teammate</h3>
                <div class="about__mate mate">
                    <Images imageName="mates.jpg" altText="Our teammate" className="mate__img"/>
                    <div class="mate__info">
                    <p class="mate__text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                    <p class="mate__text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>

                        <div class="mate__links--wrapper">
                            <a href="#" class="link">About Us</a>
                            <a href="#" class="link link--dark"><Images imageName="play-circle.svg" altText="Play button" className="link__image"/>Our Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="services">
            <div class="services__wrapper">
                <div class="services__info">
                    <h2 class="services__heading">Our Services</h2>
                    <h3 class="services__subtitle">Perfect and Fast
                        Movement</h3>
                    <p class="services__text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                    <a href="#" class="services__link">Read more<Images imageName="arrow-right 1.svg" altText="Arrow" className="services__arrow"/></a>
                </div>
                <ul class="services__adv adv">
                    <li class="adv__items">
                        <Images imageName="white.svg" altText="Social Media Management" className="adv__image"/>
                        <Images imageName="monitor.svg" altText="Monitor" className="adv__image--icon"/>
                        <p class="adv__text">Social Media Management</p>
                    </li>
                    <li class="adv__items">
                        <Images imageName="red.svg" altText="Search Engine Opimization" className="adv__image"/>
                        <Images imageName="settings.svg" altText="Settings" className="adv__image--icon"/>
                        <p class="adv__text">Search Engine Opimization</p>
                    </li>
                    <li class="adv__items">
                        <Images imageName="green.svg" altText="Design" className="adv__image"/>
                        <Images imageName="pen-tool.svg" altText="Pen" className="adv__image--icon2"/>
                        <p class="adv__text">Design</p>
                    </li>
                    <li class="adv__items">
                        <Images imageName="yellow.svg" altText="Ads" className="adv__image"/>
                        <Images imageName="tv.svg" altText="Tv" className="adv__image--icon2"/>
                        <p class="adv__text">Ads</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="portfolio">
            <div class="portfolio__wrapper">
                <h2 class="portfolio__heading">Our Portfolio</h2>
                <h3 class="portfolio__subtitle">What do we do</h3>
                <p class="portfolio__text">all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
                
                <ul class="portfolio__app app">
                    <li class="app__items">
                        <Images imageName="byte-app.jpg" altText="Design Byte Ap" className="app__image"/>
                        <p class="app__text">Design Byte App</p>
                    </li>
                    <li class="app__items">
                        <Images imageName="cloud-app.jpg" altText="Cloud App" className="app__image"/>    
                        <p class="app__text app__text--middle">Cloud App</p>
                    </li>
                    <li class="app__items">
                        <Images imageName="furn-app.jpg" altText="Design Furniture App" className="app__image"/>
                        <p class="app__text">Design Furniture App</p>
                    </li>
                </ul>

                <a href="#" class="portfiolio__link">See All Portfolio</a>
            </div>
        </section>

        <section class="testimonial">
            <div class="testimonial__wrapper">
                <h2 class="testimonial__heading">Testimonial</h2>
                <h3 class="testimonial__subtitle">People Talk about us</h3>
                <ul class="testimonial__list list">
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg" altText="Profile" className="item__image"/>
                            <div class="item__texts">
                                <h4 class="item__name">Angel Rose</h4>
                                <p class="item__proff">Creative Manager</p>
                            </div>
                        </div>
                        <p class="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                    </li>
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg" altText="Profile" className="item__image"/>
                            <div class="item__texts">
                                <h4 class="item__name">Angel Rose</h4>
                                <p class="item__proff">Creative Manager</p>
                            </div>
                        </div>
                        <p class="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                    </li>                    
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg" altText="Profile" className="item__image"/>
                            <div class="item__texts">
                                <h4 class="item__name">Angel Rose</h4>
                                <p class="item__proff">Creative Manager</p>
                            </div>
                        </div>
                        <p class="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look . </p>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    )
}
