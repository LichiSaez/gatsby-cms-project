import React from 'react';
import {Link} from 'gatsby';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I'm a React Jr Developer currently learning the Gatsby framework</p>
            <p><Link to="/contact">Want to contact me?</Link></p>
            <Footer />
        </div>
    );
};

export default AboutPage;