import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {siteName} from '../config/config'
import Service1 from '../Assets/Images/ambassador.svg'
import Service2 from '../Assets/Images/partner.svg'
import Service3 from '../Assets/Images/marking.svg'
import Service4 from '../Assets/Images/partner.svg'

const Services = () => {
    return (
        <div className='service' data-aos="fade-right">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="heading">
                            <h5>More Services</h5>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="service-items">
                            <div className='service-1'>
                                <img src={Service1} alt="" />
                                <span>{siteName} Ambassador</span>
                            </div>
                            <div className='service-1'>
                                <img src={Service2} alt="" />
                                <span>{siteName} Partner</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} className='center'>
                        <div className="divider">

                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="service-items">
                            <div className='service-1'>
                                <img src={Service3} alt="" />
                                <span>Market Makers</span>
                            </div>
                            <div className='service-1'>
                                <img src={Service4} alt="" />
                                <span>Help Center</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="trip trip-panel">
                            <div className="flex-col">
                                <p>Explore the Crypto World with {siteName}</p>
                                <button>
                                    <span>Register Now</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services
