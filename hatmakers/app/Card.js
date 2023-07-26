// components/Card.js
import React from 'react';
import styles from '@/public/styles/index.module.css';

const Card = ({ title, children }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <div className={styles.cardContent}>{children}</div>
        </div>
    );
};

export default Card;
