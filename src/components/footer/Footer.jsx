import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <div className={`footer__container ${style.footerContent}`}>
            <div class="attribution">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank" rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://www.frontendmentor.io/profile/iskandar13abdurakhmonov">eescan</a>.
            </div>
        </div>
    )
}
