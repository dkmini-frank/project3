import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


import { SectionWrapper, BookingIcon, CommonTitle, CommonDescribe, IcoWrapper, CustomerIcon, CoffeeIcon } from './homePageStyled';


function Homepage() {
    return (
        <Container fluid>
            <Row>
                <Col md={4}>
                    <Link to="/admin/booking">
                        <SectionWrapper wrapperColor={'rgb(239,179,92)'}>
                            <IcoWrapper>
                                <BookingIcon />
                            </IcoWrapper>
                            <CommonTitle>Booking</CommonTitle>
                            <CommonDescribe>Current Booking Number:28</CommonDescribe>
                        </SectionWrapper>
                    </Link>
                </Col>
                <Col md={4}>
                    <Link to="/admin/customer">
                        <SectionWrapper wrapperColor={'rgb(105,189,106)'}>
                            <IcoWrapper>
                                <CustomerIcon />
                            </IcoWrapper>
                            <CommonTitle>Customer Management</CommonTitle>
                            <CommonDescribe>Current Customer Number:299</CommonDescribe>
                        </SectionWrapper>
                    </Link>
                </Col>
                <Col md={4}>
                    <SectionWrapper wrapperColor={'rgb(90,183,211)'}>
                        <IcoWrapper>
                            <CoffeeIcon />
                        </IcoWrapper>
                        <CommonTitle>Coffee Management</CommonTitle>
                        <CommonDescribe>Current Coffee Number:20</CommonDescribe>
                    </SectionWrapper>
                </Col>
            </Row>
        </Container>

    )
}

export default Homepage;