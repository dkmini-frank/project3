import React from 'react';
import { NavbarWrapper, NavWrapper, RouterLink, NavbarBrandWrapper, NavLinkWrapper, NavLinkWrapperRight } from './menuBarStyled';


function ClinetMenu() {
    return (
        <NavbarWrapper collapseOnSelect expand="lg" bg="dark" variant="dark">
            <RouterLink to="/">
                <NavbarBrandWrapper  >Coffee Shop</NavbarBrandWrapper>
            </RouterLink>
            <NavbarWrapper.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarWrapper.Collapse id="responsive-navbar-nav">
                <NavWrapper className="mr-auto">
                    <RouterLink to="/">
                        <NavLinkWrapper href="/">Home</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/">
                        <NavLinkWrapper href="/">Menu</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/">
                        <NavLinkWrapper href="/">About US</NavLinkWrapper>
                    </RouterLink>
                    <RouterLink to="/">
                        <NavLinkWrapper href="/">Contact</NavLinkWrapper>
                    </RouterLink>
                </NavWrapper>
                <NavWrapper>
                    <NavLinkWrapperRight href="/">Cart</NavLinkWrapperRight>
                </NavWrapper>
                <NavWrapper>
                    <RouterLink to="/">
                        <NavLinkWrapperRight href="/">LogIn</NavLinkWrapperRight>
                    </RouterLink>
                </NavWrapper>
            </NavbarWrapper.Collapse>
        </NavbarWrapper>
    )
}

export default ClinetMenu;