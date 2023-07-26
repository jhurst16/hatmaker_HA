import React from 'react';
import styles from '@/public/styles/footer.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";

const phoneNumber = '(865) 323-5527';
const emailAddress = 'hatmakerheatingandcooling@gmail.com';

const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
};

// Click-to-email function
const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
};

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <p>© {new Date().getFullYear()} Hatmaker Heating and Cooling LLC.</p>
                <p>Contact us:</p>

                <p onClick={handleCall} style={{cursor: 'pointer'}}>
                    <strong>Phone Number:</strong> {phoneNumber}
                </p>
                <p onClick={handleEmail} style={{cursor: 'pointer'}}>
                    <strong>Email Address:</strong> {emailAddress}
                </p>
            </div>
            <div className={styles.column}>
                {/* Content for the second column */}
                <h4>Navigation</h4>
                <ul className={styles['nav-link']}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">Staff</a></li>
                    <li><a href="/">Our Services</a></li>
                    <li><a href="/replacements">Replacements</a></li>
                    <li><a href="/contact">Contact Info</a></li>
                </ul>
            </div>
            <div className={styles.column}>
                {/* Content for the third column */}
                <h4>Socials</h4>
                <ul className={styles['nav-link']}>
                    <li>
                        <div><a href="https://www.facebook.com/profile.php?id=100093194975068"
                                className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                        </a><a href="https://www.facebook.com/profile.php?id=100093194975068"
                               className="facebook social">
                            <FontAwesomeIcon icon={faGoogle} size="2x"/>
                        </a></div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

