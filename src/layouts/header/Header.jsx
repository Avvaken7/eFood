import React, { useRef, useEffect, useState, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { googleSignIn, googleLogout } from '../../helpers/Authentication';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

import logo from '../../assets/efood.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import styles from './header.module.css';


const Header = () => {
    const cart = useContext(CartContext);

    const [user, setUser] = useState({});
    const [isActiveMenu, setActiveMenu] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const ref = useRef(null);
    const headerRef = useRef(null);


    const countOfAddItem = cart.getItemCount();

    const handleGoogleSignIn = async () => {
        try {
            googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    useEffect(() => {
        const handleClick = () => {
            setActiveMenu(!isActiveMenu);
        };
        const element = ref.current;

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };

    }, [isActiveMenu]);

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
                        <div ref={ref} className={`${styles.menuBtn} ${isActiveMenu ? `${styles.activeMenu}` : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav>
                            <ul className={`${styles.menu} ${isActiveMenu ? `${styles.activeMenu}` : ""}`}>
                                <li>
                                    <NavLink to="/" onClick={() => setActiveMenu(false)}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" onClick={() => setActiveMenu(false)}>Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={() => setActiveMenu(false)}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" onClick={() => setActiveMenu(false)}>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <NavLink to='/cart' className={styles.cartShopping} onClick={() => setActiveMenu(false)}>
                            <div className={styles.isCard}>{countOfAddItem}</div>
                            <FontAwesomeIcon icon={faCartShopping} size='lg' className={styles.menuLink} />
                        </NavLink>
                        {
                            user?.displayName ?
                                <>
                                    <div className={styles.user}>
                                        <div className={styles.userPhoto}>
                                            <div className={styles.userInfo}>
                                                <h4>Hi, {user.displayName}!</h4>
                                                <div className={styles.userEmail}>
                                                    <span className={styles.userLabel}>email:</span>
                                                    <p>{user.email}</p>
                                                </div>                                             
                                            </div>
                                            <img src={user.photoURL} alt="avatar" />
                                        </div>
                                        <button className={styles.logOutButton} onClick={googleLogout}>
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                        </button>
                                    </div>
                                </>
                                :
                                <NavLink className={styles.loginBtn} onClick={handleGoogleSignIn}>
                                    Sign In
                                </NavLink>
                        }

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;