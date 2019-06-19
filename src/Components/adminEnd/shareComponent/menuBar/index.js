import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavbarWrapper, NavWrapper, RouterLink } from './menuBarStyled';


function AdminMenuBar() {
    return (
        <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
            <RouterLink to="/admin">
                <NavbarWrapper.Brand href="/home">Coffee Shop</NavbarWrapper.Brand>
            </RouterLink>
            <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarWrapper.Collapse id="responsive-navbar-nav">
                <NavWrapper className="mr-auto">
                    <RouterLink to="/admin">
                        <NavWrapper.Link href="/admin">Home</NavWrapper.Link>
                    </RouterLink>
                    <RouterLink to="/admin/booking">
                        <NavWrapper.Link href="/admin/booking">Booking</NavWrapper.Link>
                    </RouterLink>
                    <RouterLink to="/admin/customer">
                        <NavWrapper.Link href="/admin/customer">Customer Management</NavWrapper.Link>
                    </RouterLink>
                    <RouterLink to="/admin/coffee">
                        <NavWrapper.Link href="/admin/coffee">Coffee Management</NavWrapper.Link>
                    </RouterLink>
                </NavWrapper>
                <NavWrapper>
                    <RouterLink to="/admin/login">
                        <Nav.Link href="/admin/login">Logout</Nav.Link>
                    </RouterLink>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}

export default AdminMenuBar;