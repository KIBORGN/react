import React from 'react'
import Images from '../components/Images'
import ItemHeading from '../components/ItemHeading'
import CardItem from '../components/CardItem'


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
                <ItemHeading classH2 ="about__heading" classH3 ="about__subtitle" textH2 ="About Us" textH3 = "Our Teammate"/>
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
                    <ItemHeading classH2 ="services__heading" classH3 ="services__subtitle" classP="services__text" textH2 ="Our Services" textH3 = "Perfect and Fast Movement" textP="We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business"/>
                    <a href="#" class="services__link">Read more<Images imageName="arrow-right 1.svg" altText="Arrow" className="services__arrow"/></a>
                </div>
                <ul class="services__adv adv">
                    <CardItem post={{classLi: "adv__items",classImage: "adv__image", altImage: "Social Media Management",imageName: "white.svg", classImage2: "adv__image--icon", altImage2: "monitor.svg",imageName2: "tv.svg", pClass: "adv__text", pText: "Social Media Management"}} />
                    <CardItem post={{classLi: "adv__items",classImage: "adv__image", altImage: "Search Engine Opimization",imageName: "red.svg", classImage2: "adv__image--icon", altImage2: "Settings",imageName2: "settings.svg", pClass: "adv__text", pText: "Search Engine Opimization"}} />
                    <CardItem post={{classLi: "adv__items",classImage: "adv__image", altImage: "Design",imageName: "green.svg", classImage2: "adv__image--icon2", altImage2: "Pen",imageName2: "pen-tool.svg", pClass: "adv__text", pText: "Design"}} />
                    <CardItem post={{classLi: "adv__items",classImage: "adv__image", altImage: "Ads",imageName: "yellow.svg", classImage2: "adv__image--icon2", altImage2: "Tv",imageName2: "tv.svg", pClass: "adv__text", pText: "Ads"}} />
                </ul>
            </div>
        </section>

        <section class="portfolio">
            <div class="portfolio__wrapper">
                <ItemHeading classH2 ="portfolio__heading" classH3 ="portfolio__subtitle" classP="portfolio__text" textH2 ="Our Portfolio" textH3 = "What do we do" textP="all projects that we have already done , proven can help to use more comfortable, then can used by client from our business"/>
                <ul class="portfolio__app app">
                    <CardItem post={{classLi: "app__items",classImage: "app__image", altImage: "Design Byte Ap",imageName: "byte-app.jpg", pClass: "app__text", pText: "Design Byte App"}} />
                    <CardItem post={{classLi: "app__items",classImage: "app__image", altImage: "Cloud App",imageName: "cloud-app.jpg", pClass: "app__text app__text--middle", pText: "Cloud Ap"}} />
                    <CardItem post={{classLi: "app__items",classImage: "app__image", altImage: "Design Furniture App",imageName: "furn-app.jpg", pClass: "app__text", pText: "Design Furniture App"}} />
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
