import React, { useRef, useEffect, useState } from 'react';

import logo from '../../assets/efood.svg';
import Button from '../../components/button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.css';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const ref = useRef(null);

    useEffect(() => {

        const handleClick = e => {
            setActive(!isActive);
        };
        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };

    }, [isActive]);

    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.topNavigation}>
                        <a href="/" className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </a>
                        <div ref={ref} className={`${styles.menuBtn} ${isActive ? `${styles.active}` : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav>
                            <ul className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Service</a></li>
                                <li><a href="/">Top cities</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </nav>

                        <a href="/">
                            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className={styles.menuLink} />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faCartShopping} size='lg' className={styles.menuLink} />
                        </a>
                        <Button variant={'primary'}>Sign Up</Button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;