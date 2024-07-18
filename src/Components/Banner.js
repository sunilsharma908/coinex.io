import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Decor from '../Assets/Images/decor_night.png'

const Banner = () => {
  return (
    <div className='home-banner'>
      <Container className='custom-container'>
        <div className="c-home-banner">
          <Row>
            <Col lg={8} md={12}>
              <div className="banner-txt">
                <h1>The Global Cryptocurrency Exchange</h1>
                <p>Making Crypto Trading Easier</p>
                <div className="register-banner">
                  <div className="banner-input">
                    <input type="text" placeholder='Email Account' className='form-control' />
                  </div>
                  <button className='reg-btn'><span>Register Now</span></button>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="banner-img">
                <img src={Decor} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Banner
