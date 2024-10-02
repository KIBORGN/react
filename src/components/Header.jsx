import React from 'react'
import Images from '../components/Images'

export default function Header() {
    return (
        <header class="header">
        <div class="header__wrapper">
            <div class="logo">
                <a href="#" class="header__logo logo">
                    <Images imageName="logo.svg" altText="Logo"/>
                </a>
            </div>
            <nav class="header__nav nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#" class="nav__link nav__link--bold">Home</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Sevices</a></li>
                    <li class="nav__item"><a href="#" class="nav__link">Projects</a></li>
                </ul>
            </nav>
            <a href="#" class="functions__link">Contact us</a>
        </div>
        </header>
    )
}