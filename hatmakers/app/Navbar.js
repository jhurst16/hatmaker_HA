// components/Navbar.js
import React from 'react';
import styles from '@/public/styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src="/images/logo.png" alt="Logo" className={styles.logo} />
                <div className={styles['company-name']}>Hatmaker Heating and Cooling</div>
            </div>
            <div className={styles['']}></div>
            <ul className={styles['nav-links']}>
                <li className={styles['nav-link']}>
                    <a href="/home">Home</a>
                </li>
                <li className={styles['nav-link']}>
                    <a href="/about">Staff</a>
                </li>
                <li className={styles['nav-link']}>
                    <a href="/">Our Services</a>
                </li>
                <li className={styles['nav-link']}>
                    <a href="/replacements">Replacements</a>
                </li>
                <li className={styles['nav-link']}>
                    <a href="/contact">Contact Info</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
