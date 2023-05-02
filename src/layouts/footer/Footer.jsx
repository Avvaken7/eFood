import React from 'react';

import logo from '../../assets/efood.svg';
import call from '../../assets/footer/Calling.svg';
import loc from '../../assets/footer/Location.svg';
import message from '../../assets/footer/Message.svg';

import { ReactComponent as FacebookLogo } from '../../assets/footer/social/facebook.svg';
import { ReactComponent as TwitterLogo } from '../../assets/footer/social/twitter.svg';
import { ReactComponent as InstagramLogo } from '../../assets/footer/social/instagram.svg';
import { ReactComponent as PinterestLogo } from '../../assets/footer/social/pinterset.svg';

import styles from './footer.module.css';

const Footer = () => {

    const serviceLink = [
        { id: 1, link: 'How it works' },
        { id: 2, link: 'Home delivery' },
        { id: 3, link: 'Products' },
        { id: 4, link: 'Menu' },
        { id: 5, link: 'About Us' },
        { id: 6, link: 'News' },
        { id: 7, link: 'Our trusted partner' },
        { id: 8, link: 'New users FAQ' },
        { id: 9, link: 'Help center' },
        { id: 10, link: 'Feedback' },
        { id: 11, link: 'Contact us' },
        { id: 12, link: 'Terms' },
        { id: 13, link: 'Download app' },
        { id: 14, link: 'Blog' },
        { id: 15, link: 'What’s new' },
        { id: 16, link: 'Sitemap' },
    ]

    const columns = Math.ceil(serviceLink.length / 4);

    const firstColumn = serviceLink.slice(0, columns).map(item => {
        return <li key={item.id}>
            <a href="/">{item.link}</a>
        </li>
    });

    const secondColumn = serviceLink.slice(4, 8).map(item => {
        return <li key={item.id}>
            <a href="/">{item.link}</a>
        </li>
    });

    const thirdColumn = serviceLink.slice(8, 12).map(item => {
        return <li key={item.id}>
            <a href="/">{item.link}</a>
        </li>
    });

    const fourthColumn = serviceLink.slice(12, 16).map(item => {
        return <li key={item.id}>
            <a href="/">{item.link}</a>
        </li>
    });

    const today = new Date();
    const year = today.getFullYear();


    return (
        <footer>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <a href="/" className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </a>
                        <a href='/' className={styles.infoLink}>
                            <img src={loc} alt="Dhaka, Bangladesh" />
                            Dhaka, Bangladesh
                        </a>
                        <a href='tel:+0943833399' className={styles.infoLink}>
                            <img src={call} alt="+0943833399" />
                            0943833399
                        </a>
                        <a href='mailto:support@efood.com' className={styles.infoLink} >
                            <img src={message} alt="support@efood.com" />
                            support@efood.com
                        </a>
                        <div className={styles.social}>
                            <a href="/" className={styles.socialLinkFacebook} alt='facebook'>
                                <FacebookLogo />
                            </a>
                            <a href="/" className={styles.socialLinkTwitter} alt='twitter'>
                                <TwitterLogo />
                            </a>
                            <a href="/" className={styles.socialLinkInsta} alt='instagram'>
                                <InstagramLogo />
                            </a>
                            <a href="/" className={styles.socialLinkPint} alt='pinterest'>
                                <PinterestLogo />
                            </a>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.navItem}>
                            <span>Service</span>
                            <ul className={styles.footerList}>{firstColumn}</ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Company</span>
                            <ul className={styles.footerList}>{secondColumn}</ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Supports</span>
                            <ul className={styles.footerList}>{thirdColumn}</ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Resources</span>
                            <ul className={styles.footerList}>{fourthColumn}</ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container'>
                <div className={styles.bottomFooter}>
                    <span>© {year} EFood - All rights reserved.</span>
                    <div className={styles.information}>
                        <a href="/">Privacy</a>
                        <a href="/">Security</a>
                        <a href="/">Terms</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;