import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='text-center m-5 footer-head'>
            <h4 className='text-white'>Einstein School</h4>
            <p className='text-white'><small>Copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;