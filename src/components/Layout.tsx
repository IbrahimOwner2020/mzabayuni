import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-primary min-h-screen">
            <Navigation />
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;