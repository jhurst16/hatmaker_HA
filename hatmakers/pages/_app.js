// pages/_app.js
import React from 'react';
import Navbar from '../app/Navbar';
import Footer from '../app/Footer';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
