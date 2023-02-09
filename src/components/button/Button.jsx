import React from 'react';
import styles from './button.module.css';

const Button = ({ variant, onClick, children }) => {

    return (
        <a  href="/"
            className={
                variant === 'primary' ? `${styles.primary}` :
                variant === 'popular' ? `${styles.popular}` :
                variant === 'transparent' ? `${styles.popularTransparent}` :
                variant === 'rounded' ? `${styles.rounded}` :
                variant === 'food' ? `${styles.food}` :
                variant === 'card' ? `${styles.card}`:`${styles.btn}`
            }
            onClick={onClick}
            variant={variant}
        >
            {children}
        </a>
    )
};

export default Button;