// pages/contact.js
import React from 'react';
import styles from '../public/styles/contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

    const phoneNumber = '(865) 323-5527';
    const emailAddress = 'hatmakerheatingandcooling@gmail.com';

    // Click-to-call function
    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // Click-to-email function
    const handleEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    return (
        <div className={styles['contact-container']}>
            <div className={styles['contact-info']}>
                <h1>Contact Us</h1>
                <p>
                    <strong>Company Name:</strong> Hatmaker Heating and Cooling LLC
                </p>
                <p>
                    <strong>First Name:</strong> Justen
                </p>
                <p>
                    <strong>Last Name:</strong> Hatmaker
                </p>
                <p onClick={handleCall} style={{ cursor: 'pointer' }}>
                    <strong>Phone Number:</strong> {phoneNumber}
                </p>
                <p onClick={handleEmail} style={{ cursor: 'pointer' }}>
                    <strong>Email Address:</strong> {emailAddress}
                </p>
                <p>
                    <strong>Address:</strong> Caryville TN, 37714
                </p>
                <p className={styles['padding']}>
                </p>
            </div>

            <div className={styles.hours}>
                {/* Hours section */}
                <h1>Hours</h1>
                <p>Monday: 7:00AM - 5:00PM</p>
                <p>Tuesday: 7:00AM - 5:00PM</p>
                <p>Wednesday: 7:00AM - 5:00PM</p>
                <p>Thursday: 7:00AM - 5:00PM</p>
                <p>Friday: 7:00AM - 5:00PM</p>
                <p>Phone Calls: Any Time</p>
            </div>
        </div>
    );
};

export default Contact;
