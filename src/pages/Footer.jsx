import React from 'react'
import Images from '../components/Images'
import CardLink from '../components/CardLink'
import Typography from '../components/Typography'

export default function Footer() {
    return (
        <footer class="footer">
        <div class="footer__wrapper">
            <section>
            <Typography type="h3" className="visually-hidden">Footer Navigation</Typography>
            <nav class="footer__nav nav nav--footer">
                <a href="#" class="footer__logo logo">
                    <Images imageName="logo.svg"/>
                </a>
                <div class="nav__nav-additional nav-additional">
                    <Typography type="h3" className="additional__heading">Terms & policies</Typography>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Terms of Service"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Privacy Policy"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <Typography type="h3" className="additional__heading">Company</Typography>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Home"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="About Us"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="Contact Us"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <Typography type="h3" className="additional__heading">Contact</Typography>
                    <ul class="nav-additional__list">
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="(+62) 893912392190"/>
                        <CardLink classItem="nav-additional__item" classLink="nav-additional__link" textLink="agecnycr@gmail.com"/>
                    </ul>
                </div>
                <div class="nav__nav-additional nav-additional">
                    <Typography type="h3" className="additional__heading">Location</Typography>
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
                <Typography type="h2" className="visually-hidden">Copyrigth and Socials</Typography>
                <div class="copyrigth__wrapper">
                    <ul class="copyrigth__socials socials">
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="inst.svg"/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="twitt.svg"/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="faceb.svg"/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="invo.svg"/></a></li>
                        <li class="socials__item"><a href="#" class="socials__link"><Images imageName="outlook.svg"/></a></li>
                    </ul>
                    <Typography type="p" className="copyrigth__text">Copyrigth © 2022 Allbirds, Inc. All Rights Reserved.</Typography>
                </div>
            </section>
        </div>
    </footer>
    )
}
