import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center m-5'>
            <p><small>Copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;