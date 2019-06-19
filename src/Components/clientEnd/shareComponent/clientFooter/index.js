import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { FooterWrapper, FooterTitle } from './footerStyled';



function ClientFooter() {
    return (
        <Container fluid>
            <Row>
                <FooterWrapper>
                    <FooterTitle>This Website Is Designed by JR</FooterTitle>
                </FooterWrapper>
            </Row>
        </Container>
    )
}

export default ClientFooter;