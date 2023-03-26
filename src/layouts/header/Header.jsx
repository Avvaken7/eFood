import React, { useRef, useEffect, useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';

import logo from '../../assets/efood.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.css';

const Header = () => {
    const cart = useContext(CartContext);

    const [isActive, setActive] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const ref = useRef(null);
    const headerRef = useRef(null);

    const countOfAddItem = cart.getItemCount();

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

    useEffect(() => {
        const header = headerRef.current;
        const sticky = header.offsetTop;
        const handleScroll = () => {
            if (window.pageYOffset > sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header ref={headerRef} className={`${isSticky ? styles.headerSticky : ""}`}>
                <div className='container'>
                    <div className={styles.topNavigation}>
                        <Link to='/' className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <div ref={ref} className={`${styles.menuBtn} ${isActive ? `${styles.active}` : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav>
                            <ul className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}>
                                <li>
                                    <NavLink to="/" onClick={() =>setActive(false)}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" onClick={() =>setActive(false)}>Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cities" onClick={() =>setActive(false)}>Top cities</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" onClick={() =>setActive(false)}>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <NavLink to='/cart' className={styles.cartShopping} onClick={() =>setActive(false)}>
                            <div className={styles.isCard}>{countOfAddItem}</div>
                            <FontAwesomeIcon icon={faCartShopping} size='lg' className={styles.menuLink} />
                        </NavLink>
                        <NavLink to='/login' className={styles.loginBtn} onClick={() =>setActive(false)}>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;