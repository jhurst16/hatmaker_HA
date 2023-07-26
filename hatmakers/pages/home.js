// pages/index.js
import React, {useState} from 'react';
import styles from '../public/styles/home.module.css';

const images = [
    '/images/carousel_1.jpeg',
    '/images/carousel_2.jpeg',
    '/images/carousel_3.jpeg',
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className={styles['main-container']}>
            {/* Header section */}
            <header className={styles['header-container']}>
                <div>
                    <h1>Hatmaker Heating and Cooling</h1>
                    <p>Discover the best HVAC solutions for your needs. Whether this be a simple project like a home visit
                        for a cleaning and a structured maintenance plan, or a huge project such as installing/replacing a
                        completely new system at a home or business, we have you covered. With our experience, we can manage
                        residential, commercial, industrial, new construction, and so much more. For any questions, please
                        feel free to <a href='/contact' className={styles['nav-link']}>contact us</a> any time!
                    </p>
                </div>
            </header>

            {/* Carousel section */}
            <div className={styles.carousel}>
                <div className={styles['image-container']}>
                    <img
                        src={images[currentSlide]}
                        alt={`Slide ${currentSlide + 1}`}
                        className={styles['carousel-image']}
                    />
                </div>
                <button onClick={prevSlide} className={styles['carousel-button']}>&lt;</button>
                <button onClick={nextSlide} className={styles['carousel-button']}>&gt;</button>
            </div>

            {/* Cards section */}
            <section className={styles.cards}>
                <div className={styles.card}>
                    <h2>Staff</h2>
                    <p>We value our staff, who in turn value you! To get to know more about our staff, head over to <a href='/about'>Our Staff</a>.</p>
                </div>
                <div className={styles.card}>
                    <h2>Replacements</h2>
                    <p>We diligently replace HVAC systems, partnering with the brands we trust, found in <a
                        href='/replacements'>Replacements</a>.</p>
                </div>
                <div className={styles.card}>
                    <h2>Maintenance</h2>
                    <p>Our maintenance plans vary from system to system, to see a specific maintenance plan, see <a href='/services'>Our Services</a>.</p>
                </div>
                {/* Add more cards if needed */}
            </section>
        </div>
    );
};

export default Index;
