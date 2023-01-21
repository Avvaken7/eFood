import React from 'react';

import Logo from '../../components/logo/Logo';
import Button from '../../components/button/Button';

import { IconContext } from "react-icons";
import { CiSearch } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './header.module.css';

const Header = () => {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.topNavigation}>
                        <a href="/" className={styles.logo}>
                            <Logo />
                        </a>
                        <nav className={styles.nav}>
                            <ul className={styles.menu}>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Service</a></li>
                                <li><a href="/">Top cities</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </nav>

                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            <a href="/" className={styles.menuLink}>
                                <CiSearch />
                            </a>
                        </IconContext.Provider>

                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            <a href="/" className={styles.menuLink}>
                                <AiOutlineShoppingCart />
                            </a>
                        </IconContext.Provider>
                        
                        <Button variant={'primary'}>Sign Up</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;