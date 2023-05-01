import React from 'react';
import styles from './button.module.css';

const Button = ({ variant, onClick, children, ...other }) => {

    return (
        <button
            className={
                variant === 'primary' ? `${styles.primary}` :
                variant === 'popular' ? `${styles.popular}` :
                variant === 'transparent' ? `${styles.popularTransparent}` :
                variant === 'rounded' ? `${styles.rounded}` :
                variant === 'food' ? `${styles.food}` :
                variant === 'success' ? `${styles.success}` :
                variant === 'count' ? `${styles.count}` :
                variant === 'cta' ? `${styles.ctaLink}` :
                variant === 'card' ? `${styles.card}`:`${styles.btn}`
            }
            onClick={onClick}
            variant={variant}
            {...other}
        >
            {children}
        </button>
    )
};

export default Button;