import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { siteLogo, siteName } from '../config/config';
import Social1 from '../Assets/Images/icon-email-night.svg'
import Social2 from '../Assets/Images/icon-telegram-night.svg'
import Social3 from '../Assets/Images/icon-facebook-night.svg'
import Social4 from '../Assets/Images/icon-twitter-night.svg'
import Social5 from '../Assets/Images/icon-medium-night.svg'
import Social6 from '../Assets/Images/icon-reddit-night.svg'
import Social7 from '../Assets/Images/icon-instagram-night.svg'
import Social8 from '../Assets/Images/icon-youtube-night.svg'
import Social9 from '../Assets/Images/icon-discord-night.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='main-footer'>
      <Container>
        <div className="footer-start">
          <Row>
            <Col lg={4}>
              <div className="widget-1">
                <div className="logo-txt">
                  <img src={siteLogo} alt="" />
                  <div className='f-txt'>Making Crypto Trading Easier</div>
                </div>
                <div className="f-icons">
                  <div className="social-box">
                    <img src={Social1} alt="" />
                    <img src={Social2} alt="" />
                    <img src={Social3} alt="" />
                    <img src={Social4} alt="" />
                    <img src={Social5} alt="" />
                    <img src={Social6} alt="" />
                    <img src={Social7} alt="" />
                    <img src={Social8} alt="" />
                    <img src={Social9} alt="" />
                  </div>
                  <div className='claim'>© 2017-2024 {siteName}.com. All rights reserved.</div>
                </div>

              </div>
            </Col>
            <Col lg={2}>
              <div className="widget-2">
                <div className="f-head">
                  <span>About</span>
                </div>
                <div className="f-links">
                  <ul>
                    <li><Link to="">About Us</Link></li>
                    <li><Link to="">Contact Us</Link></li>
                    <li><Link to="">Join Us</Link></li>
                    <li><Link to="">Terms of Service</Link></li>
                    <li><Link to="">Privacy Policy</Link></li>
                    <li><Link to="">Disclaimer</Link></li>
                    <li><Link to="">About CET</Link></li>
                    <li><Link to="">Asset Security</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="widget-3">
                <div className="f-head">
                  <span>Services</span>
                </div>
                <div className="f-links double">
                  <ul>
                    <li><Link to="">Market maker</Link></li>
                    <li><Link to="">Broker</Link></li>
                    <li><Link to="">{siteName} Ambassador</Link></li>
                    <li><Link to="">{siteName} VIP</Link></li>
                    <li><Link to="">{siteName} Partner</Link></li>
                    <li><Link to="">Creator Program</Link></li>
                    <li><Link to="">Feed</Link></li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Insight</Link></li>
                  </ul>
                  <ul>
                    <li><Link to="">Referral Reward</Link></li>
                    <li><Link to="">Fees Standard</Link></li>
                    <li><Link to="">Apply for Token Listing</Link></li>
                    <li><Link to="">BI Download</Link></li>
                    <li><Link to="">Proof of Reserve</Link></li>
                    <li><Link to="">Historical Market Data</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={2}>
              <div className="widget-4">
                <div className="f-head">
                  <span>Support</span>
                </div>
                <div className="f-links">
                  <ul>
                    <li><Link to="">Help Center</Link></li>
                    <li><Link to="">Announcements</Link></li>
                    <li><Link to="">Contact Support</Link></li>
                    <li><Link to="">ST Alert</Link></li>
                    <li><Link to="">Law Enforcement</Link></li>
                    <li><Link to="">Official Verification</Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
      <div className="bottom">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="flex-bar">
                <div className='left'>
                  2024-07-13 12:08:53 UTC+5.5
                </div>
                <div className='right'>
                  <span className='label-text'>24H Value:</span>
                  <span>930,775,376.21 USD</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Footer
