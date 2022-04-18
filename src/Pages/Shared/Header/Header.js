import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/header-logo.jpg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" ><img src={logo} height="60px" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='fs-3' href="home#services">Services</Nav.Link>
                            <Nav.Link className='fs-3' href="home#faq">FAQ</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fs-3' as={Link} to="/blogs">Blogs</Nav.Link>

                            <Nav.Link className='fs-3' as={Link} to="/about">
                                About
                            </Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none fs-3' onClick={handleSignOut}>Sign Out</button>
                                    :

                                    <Nav.Link className='fs-3' as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;