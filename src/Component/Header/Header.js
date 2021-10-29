import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="background" variant="dark">
                <Navbar.Brand className="ps-1"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/services">Services</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/doctors">Doctors</Link></Nav.Link>
                            <Nav.Link><Link className="link" to="/appointment">Appointment</Link></Nav.Link>
                        </Nav>
                    </Container>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;