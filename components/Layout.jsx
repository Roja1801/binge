import React, { useState } from 'react'
import Router from 'next/router';
import Header from './Header'
import Footer from './Footer';
import Loader from './Loader';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(false);
    Router.events.on("routeChangeStart", (url) => {
        setLoading(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    });
    return (
        <div>
            <Header />
            {loading ? <Loader /> : <main>{children}</main>}
            <Footer />
        </div>
    )
}

export default Layout