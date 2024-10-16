import React from 'react'
import Images from '../components/Images'
import ItemHeading from '../components/ItemHeading'
import CardItem from '../components/CardItem'
import Typography from '../components/Typography'
import ItemList from '../components/ItemList'


export default function Main() {
    const advitem = [
        {classLi: 'adv__items', imageName: 'white.svg', imageName2: 'monitor.svg', pClass: 'adv__text', pText: 'Social Media Management'},
        {classLi: 'adv__items', imageName: 'red.svg',  imageName2: 'settings.svg',  pClass: 'adv__text', pText: 'Search Engine Opimization'},
        {classLi: 'adv__items', imageName: 'green.svg', imageName2: 'pen-tool.svg',pClass: 'adv__text', pText: 'Design'},
        {classLi: 'adv__items', imageName: 'yellow.svg', imageName2: 'tv.svg',  pClass: 'adv__text', pText: 'Ads'}
    ]

    console.log(advitem)

    return (
        <main>
        <section class="home">
            <div class="home__wrapper">
                <Typography type="h2" className="home__heading">Make your dream 
                    business goal come true</Typography>
                    <Typography type="p" className="home__text">when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal</Typography>
                <a href="#" class="home__link">Start Project</a>
                <div class="home__images images">
                    <Images imageName="home.jpg"/>
                    <div class="images__great great">
                        <div class="great__wrapper">
                            <Images imageName="star.svg"/>
                            <Typography type="p" className="great__heading">GREAT PROJECT</Typography>
                        </div>
                        <Typography type="p" className="great__text">800+ Done</Typography>
                    </div>
                    <div class="images__port port">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg"/>
                            <div class="item__texts">
                                <Typography type="h4" className="item__name">Angel Rose</Typography>
                                <Typography type="p" className="item__proff">Creative Manager</Typography>
                            </div>
                        </div>
                        <Typography type="p" className="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look.</Typography>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="about__wrapper">
                <ItemHeading classH2 ="about__heading" classH3 ="about__subtitle" textH2 ="About Us" textH3 = "Our Teammate"/>
                <div class="about__mate mate">
                    <Images imageName="mates.jpg"/>
                    <div class="mate__info">
                        <Typography type="p" className="mate__text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</Typography>
                        <Typography type="p" className="mate__text">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</Typography>

                        <div class="mate__links--wrapper">
                            <a href="#" class="link">About Us</a>
                            <a href="#" class="link link--dark"><Images imageName="play-circle.svg"/>Our Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="services">
            <div class="services__wrapper">
                <div class="services__info">
                    <ItemHeading classH2 ="services__heading" classH3 ="services__subtitle" classP="services__text" textH2 ="Our Services" textH3 = "Perfect and Fast Movement" textP="We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business"/>
                    <a href="#" class="services__link">Read more<Images imageName="arrow-right 1.svg"/></a>
                </div>
                <ItemList className='services__adv adv' carditems = {advitem} />
            </div>
        </section>

        <section class="portfolio">
            <div class="portfolio__wrapper">
                <ItemHeading classH2 ="portfolio__heading" classH3 ="portfolio__subtitle" classP="portfolio__text" textH2 ="Our Portfolio" textH3 = "What do we do" textP="all projects that we have already done  proven can help to use more comfortable then can used by client from our business"/>
                <ul class="portfolio__app app">
                    <CardItem classLi= "app__items"classImage= "app__image" altImage= "Design Byte Ap"imageName= "byte-app.jpg" pClass= "app__text" pText= "Design Byte App" />
                    <CardItem classLi= "app__items"classImage= "app__image" altImage= "Cloud App"imageName= "cloud-app.jpg" pClass= "app__text app__text--middle" pText= "Cloud Ap" />
                    <CardItem classLi= "app__items"classImage= "app__image" altImage= "Design Furniture App"imageName= "furn-app.jpg" pClass= "app__text" pText= "Design Furniture App" />
                </ul>

                <a href="#" class="portfiolio__link">See All Portfolio</a>
            </div>
        </section>

        <section class="testimonial">
            <div class="testimonial__wrapper">
                <Typography type="h2" className="testimonial__heading">Testimonial</Typography>
                <Typography type="h3" className="testimonial__subtitle">People Talk about us</Typography>
                <ul class="testimonial__list list">
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg"/>
                            <div class="item__texts">
                                <Typography type="h4" className="item__name">Angel Rose</Typography>
                                <Typography type="p" className="item__proff">Creative Manage</Typography>
                            </div>
                        </div>
                        <Typography type="p" className="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look.</Typography>
                    </li>
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg"/>
                            <div class="item__texts">
                                <Typography type="h4" className="item__name">Angel Rose</Typography>
                                <Typography type="p" className="item__proff">Creative Manage</Typography>
                            </div>
                        </div>
                        <Typography type="p" className="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look.</Typography>
                    </li>                    
                    <li class="list__item item">
                        <div class="item__wrapper">
                            <Images imageName="profile.jpg"/>
                            <div class="item__texts">
                                <Typography type="h4" className="item__name">Angel Rose</Typography>
                                <Typography type="p" className="item__proff">Creative Manage</Typography>
                            </div>
                        </div>
                        <Typography type="p" className="item__text">There are many variations passages of Lorem Ipsum majority some by words which don't look.</Typography>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    )
}
