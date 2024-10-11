import React from 'react'
import Images from '../components/Images'
import CardLink from '../components/CardLink'

export default function Footer() {
    return (
        <footer class="footer">
        <div class="footer__wrapper">
            <section>
            <h2 class="visually-hidden">Footer Navigation</h2>
            <nav class="footer__nav nav nav--footer">
                <a href="#" class="footer__logo logo">
                <Images imageName="logo.svg" altText="agency" className='logo__img logo__img--footer'/>
                </a>
                <div class="nav__nav-additional nav-additional">
                    <h3 class="nav-additional__heading">Terms & policies</h3>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Terms of Service"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Privacy Policy"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <h3 class="nav-additional__heading">Company</h3>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Home"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="About Us"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Contact Us"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <h3 class="nav-additional__heading">Contact</h3>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="(+62) 893912392190"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="agecnycr@gmail.com"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <h3 class="nav-additional__heading">Location</h3>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="PT Osiris Real Estate Internasional"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Jl. KH. Wahid Hasyim Kel No.10D"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Jakarta, Indonesia"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="team@OsirisRealEstate.com"/>
                    </ul>
                </div>
            </nav>
            </section>

            <section class="copyrigth">
                <h2 class="visually-hidden">Copyrigth and Socials</h2>
                <div class="copyrigth__wrapper">
                    <ul class="copyrigth__socials socials">
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="inst.svg" altText="instagram" className='copyrigth__image'/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="twitt.svg" altText="Twitter" className='copyrigth__image'/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="faceb.svg" altText="FaceBook" className='copyrigth__image'/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="invo.svg" altText="Pinterest" className='copyrigth__image'/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="outlook.svg" altText="Mail" className='copyrigth__imager'/></a></li>
                    </ul>
                    <p class="copyrigth__text">Copyrigth © 2022 Allbirds, Inc. All Rights Reserved.</p>
                </div>
            </section>
        </div>
    </footer>
    )
}
