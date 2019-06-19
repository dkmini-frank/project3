import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled(Navbar)`
    width: 1850px;
    margin:auto;
    padding-left: 30px;
`
export const NavWrapper = styled(Nav)`
    :hover{
        text-decoration:none;
    }
`
export const RouterLink = styled(Link)`
    :hover{
        text-decoration:none;
    }
`