import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Phone1 from '../Assets/Images/phone1.webp';
import Phone2 from '../Assets/Images/phone2.webp';
import Phone3 from '../Assets/Images/phone3.webp';

import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import AndroidIcon from '@mui/icons-material/Android';
import QR from '../Assets/Images/qr.png';
import { siteName } from '../config/config';

const MobileDownload = () => {
    const [activeKey, setActiveKey] = useState('first');
    const [fade, setFade] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 1199) {
            const keys = ['first', 'second', 'third'];
            let currentIndex = 0;

            const interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % keys.length;
                setFade(true);
                setTimeout(() => {
                    setActiveKey(keys[currentIndex]);
                    setFade(false);
                }, 500);
            }, 2500);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <div className='mobile-app' >
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                            <Row className='center-row'>
                                <Col lg={2} md={12}>
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
                                <Col lg={5}  md={6}>
                                    <div className="upper-content">
                                        <h5>Compatible With Multiple Devices</h5>
                                        <p>Trade Crypto, Anytime, Anywhere</p>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className={fade ? 'fade' : ''}>
                                            Diverse asset collection with comprehensive coin information
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className={fade ? 'fade' : ''}>
                                            Self-developed proprietary trade-matching engine, supporting up to 10,000 TPS
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className={fade ? 'fade' : ''}>
                                            PNL analysis at a glance, safely and conveniently deposit and withdraw assets
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <div className="flex-icons">
                                        <div className="ic">
                                            <AppleIcon />
                                            <p>APP Store</p>
                                        </div>
                                        <div className="ic">
                                            <ShopIcon />
                                            <p>Google Play</p>
                                        </div>
                                        <div className="ic">
                                            <AndroidIcon />
                                            <p>Android APK</p>
                                        </div>
                                    </div>
                                    <div className="qrcode">
                                        <div className="box">
                                            <img src={QR} alt="" />
                                        </div>
                                        <div className="txt">
                                            <p>Scan to Download {siteName} App</p>
                                            <p>iOS & Android</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={5}  md={6} className='d-small'>
                                    <Tab.Content className='right-img'>
                                        <Tab.Pane eventKey="first" className={fade ? 'fade' : ''}>
                                            <div className="phoneig">
                                                <img src={Phone1} alt="" />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className={fade ? 'fade' : ''}>
                                            <div className="phoneig">
                                                <img src={Phone2} alt="" />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className={fade ? 'fade' : ''}>
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
    );
};

export default MobileDownload;
