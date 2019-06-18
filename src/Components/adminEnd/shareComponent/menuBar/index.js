import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavbarWrapper, NavWrapper } from './menuBarStyled';
import { Link } from 'react-router-dom';


function AdminMenuBar() {
    return (
        <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/admin">
                <NavbarWrapper.Brand href="#home">Coffee Shop</NavbarWrapper.Brand>
            </Link>
            <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarWrapper.Collapse id="responsive-navbar-nav">
                <NavWrapper className="mr-auto">
                    <Link to="/admin">
                        <NavWrapper.Link href="/admin">Home</NavWrapper.Link>
                    </Link>
                    <Link to="/admin/booking">
                        <NavWrapper.Link href="/admin/booking">Booking</NavWrapper.Link>
                    </Link>
                    <NavWrapper.Link href="">Customer Management</NavWrapper.Link>
                    <NavWrapper.Link href="">Coffee Management</NavWrapper.Link>
                </NavWrapper>
                <NavWrapper>
                    <Link to="/admin/login">
                        <Nav.Link href="/admin/login">Logout</Nav.Link>
                    </Link>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}

export default AdminMenuBar;