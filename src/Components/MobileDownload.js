import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Phone1 from '../Assets/Images/phone1.webp'
import Phone2 from '../Assets/Images/phone2.webp'
import Phone3 from '../Assets/Images/phone3.webp'

const MobileDownload = () => {
    return (
        <div className='mobile-app'>
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row className='center-row'>
                                <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Market</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Transaction</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Asset</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={4}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                                        <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                                        <Tab.Pane eventKey="third">THird tab content</Tab.Pane>
                                    </Tab.Content>
                                </Col>
                                <Col sm={6}>
                                    <Tab.Content className='right-img'>
                                        <Tab.Pane eventKey="first">
                                            <div className="phoneig">
                                                <img src={Phone1} alt="" />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <div className="phoneig">
                                                <img src={Phone2} alt="" />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div className="phoneig">
                                                <img src={Phone3} alt="" />
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MobileDownload
