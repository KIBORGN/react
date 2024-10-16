import React from 'react'
import Images from '../components/Images'
import CardLink from '../components/CardLink'

export default function Header() {
    return (
        <header class="header">
        <div class="header__wrapper">
            <div class="logo">
                <a href="#" class="header__logo logo">
                    <Images imageName="logo.svg"/>
                </a>
            </div>
            <nav class="header__nav nav">
                <ul class="nav__list">
                    <CardLink classItem="nav__item" classLink="nav__link nav__link--bold" textLink="Home"/>
                    <CardLink classItem="nav__item" classLink="nav__link" textLink="About"/>
                    <CardLink classItem="nav__item" classLink="nav__link" textLink="Sevices"/>
                    <CardLink classItem="nav__item" classLink="nav__link" textLink="Projects"/>
                </ul>
            </nav>
            <a href="#" class="functions__link">Contact us</a>
        </div>
        </header>
    )
}