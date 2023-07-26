// pages/about.js
import React from 'react';
import styles from '../public/styles/about.module.css'; // Import the CSS module
import Card from '../app/Card'; // Import the Card component

const About = () => {
    return (
        <div className={styles['about-container']}>
            <div className={styles['cards-container']}>
                <Card title="About Our Staff">
                    <p>
                        Hello everyone, thanks for following our page. We just want to introduce ourselves and share some about the
                        company. Our names are Justen and Emily Hatmaker. We married in November of 2020 after years of dating as high
                        school sweethearts. We now live in Caryville along with our cat, Churchill, and Rottweiler, Denver. Justen is
                        the voice behind the phone and the smiling technician on site. He has 5 years of experience working in HVAC which
                        sparked his love for the trade. Owning and operating Hatmaker Heating & Cooling became his dream and he can’t wait
                        to see it flourish. Emily is the one behind the screen, keeping books and planning schedules. Emily graduated from UT with a bachelor's in business
                        and has experience working in customer service and advertising. In Emily's free time, she enjoy reading, baking, and hiking.
                        Together, we wish to serve our community in an impactful way. We care about our customers as if they are family.
                        Your comfort is our top priority!
                    </p>
                </Card>
            </div>
            <div className={styles['image-container']}>
                <img src="/images/justen.jpg" alt="About Us Image" />
            </div>
            <div className={styles['content']}>
                <Card title="Absolute Dog Lovers">
                    <p>I have a Rott Weiler that is over 100 pounds named Denver, who's the biggest baby you have ever seen in your life!</p>
                </Card>
                <Card title="Major Fishermen">
                    <p>We fish tournaments every chance we get! There isn't anything quite like hooking into that monster bass!</p>
                </Card>
                <Card title="Gamers on the weekend">
                    <p>When we are not doing any other hobbies mentioned here, we like to enjoy some quality gaming time with some buddies!</p>
                </Card>

            </div>
        </div>
    );
};

export default About;
