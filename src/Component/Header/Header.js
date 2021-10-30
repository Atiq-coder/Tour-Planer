import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="background" variant="dark">
                <Navbar.Brand className="ps-1"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/Destinations">Destinations</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/doctors">Doctors</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/myorder">My Order</Link></Nav.Link>
                            <span className="text-white mt-2">{user.displayName}</span>
                            {
                                user.email ?
                                    <Button variant="secondary" onClick={logOut}>Sign Out</Button>
                                    :
                                    <Nav.Link><Link className="link" to="/signin">Sign In</Link></Nav.Link>}
                        </Nav>
                    </Container>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;