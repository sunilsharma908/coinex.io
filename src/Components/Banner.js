import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className='home-banner'>
      <Container className='custom-container'>
        <div className="c-home-banner">
          <Row>
            <Col lg={7}>
            <div className="banner-txt">
              <h1>The Global Cryptocurrency Exchange</h1>
              <p>Making Crypto Trading Easier</p>
              <div className="register-banner">
                <div className="banner-input">
                  <input type="text" placeholder='Email Account' className='form-control'/>
                </div>
                <a href="#" className='reg-btn'><span>Register Now</span></a>
              </div>
            </div>
            </Col>
            <Col lg={5}></Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Banner
