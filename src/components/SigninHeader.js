import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">
                        <h1>UberEats</h1>
                    </NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light mx-2">Features</NavLink>
                        {/* <NavLink to="/cart" className="text-decoration-none text-light mx-2">Cart</NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;