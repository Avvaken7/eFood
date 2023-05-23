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
                            <ul className={styles.footerList}>
                                <li><a href="/">How it works</a></li>
                                <li><a href="/">Home delivery</a></li>
                                <li><a href="/">Products</a></li>
                                <li><a href="/">Menu</a></li>
                            </ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Company</span>
                            <ul className={styles.footerList}>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">News</a></li>
                                <li><a href="/">Our trusted partner</a></li>
                                <li><a href="/">New users FAQ</a></li>
                            </ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Supports</span>
                            <ul className={styles.footerList}>
                                <li><a href="/">Help center</a></li>
                                <li><a href="/">Feedback</a></li>
                                <li><a href="/">Contact us</a></li>
                                <li><a href="/">Terms</a></li>
                            </ul>
                        </div>
                        <div className={styles.navItem}>
                            <span>Resources</span>
                            <ul className={styles.footerList}>
                                <li><a href="/">Download app</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">What’s new</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
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