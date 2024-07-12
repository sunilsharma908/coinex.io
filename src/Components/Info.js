import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Tabs, Tab } from 'react-bootstrap';
import Card1 from '../Assets/Images/card1.png'
import Card2 from '../Assets/Images/card2.png'
import Card3 from '../Assets/Images/card3.png'
import Cover1 from '../Assets/Images/cover-1.png'
import Cover2 from '../Assets/Images/cover-2.png'
import Cover3 from '../Assets/Images/cover-3.png'
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Info = () => {

  const [key, setKey] = useState('tab1');

  return (
    <div className='info-box'>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="intro">
              <p className='leading-txt'>On CoinEx, Trade With Safety and Convenience</p>
              <p className='bt-txt'>Trusted by 5 million global users</p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="trade-box">
              <div className="box-inner">
                <div className="inner-txt">
                  <p className="mm">Trade crypto with ease</p>
                  <p className="ss">Your one-stop asset blockchain asset platform. Transact with ease and enjoy user-friendly features.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="trade-box">
              <div className="box-inner-2">
                <div className='inner-txt2'>
                  <p className='mm'>Providing seamless and user-driven crypto services</p>
                  <p className="ss">The gateway to the crypto world for all, delivering trading services and multilingual support to 200+ countries and regions.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="trade-box">
              <div className="box-inner3">
                <div className="inner-txt3">
                  <p className='mm'>Shield Fund</p>
                  <p className='sm'>CoinEx provides an additional level of reassurance on top of our robust security infrastructure - Shield Fund, going above and beyond to safeguard your assets.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="trade-box">
              <div className="box-inner4">
                <div className="inner-txt4">
                  <p className='mm'>Empowering you with advanced financial options</p>
                  <p className='ss'>Dock, AMM, financial account, crypto loans, and many more. Always catering to your trading needs.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="guide">
              <p className='mm'>Newbie Guide</p>
              <p className="ss">Master the process of trading crypto</p>
            </div>
          </Col>
          <Col lg={12}>
            <div className="tab-btn">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="tab-head"
              >
                <Tab eventKey="tab1" title="Basic">
                  <div className='tab-cards'>
                    <Row>
                      <Col lg={4}>
                        <img src={Card1} alt="" />
                        <p>How to Deposit/Withdraw on CoinEx?</p>
                      </Col>
                      <Col lg={4}>
                        <img src={Card3} alt="" />
                        <p>CoinEx Spot Trading Guide</p>
                      </Col>
                      <Col lg={4}>
                        <img src={Card2} alt="" />
                        <p>Earn with CoinEx Financial Account</p>
                      </Col>
                    </Row>
                  </div>
                </Tab>
                <Tab eventKey="tab2" title="Advanced">
                  <div className='tab-cards'>
                    <Row>
                      <Col lg={4}>
                        <img src={Card1} alt="" />
                        <p>How to Deposit/Withdraw on CoinEx?</p>
                      </Col>
                      <Col lg={4}>
                        <img src={Card3} alt="" />
                        <p>CoinEx Spot Trading Guide</p>
                      </Col>
                      <Col lg={4}>
                        <img src={Card2} alt="" />
                        <p>Earn with CoinEx Financial Account</p>
                      </Col>
                    </Row>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col lg={12}>
            <div className="panel-blog">
              <h5>Blog</h5>
              <div className="flex">
                <p>Stay updated with the latest market trend and industry insights</p>
                <Link>More <KeyboardArrowRightIcon /></Link>
              </div>
              <Row>
                <Col lg={4}>
                  <div className='blog-item'>
                    <img src={Cover1} alt="" />
                    <p className='mm'>Top 10 PolitiFi Projects In 2024 And How to Buy Their Tokens</p>
                    <p className='ss'>Explore the top 10 Politifi projects in 2024: key features, token distribution, and how to buy them on CoinEx.</p>
                  </div>
                </Col>
                <Col lg={4}>
                <div className='blog-item'>
                    <img src={Cover2} alt="" />
                    <p className='mm'>Top 10 PolitiFi Projects In 2024 And How to Buy Their Tokens</p>
                    <p className='ss'>Explore the top 10 Politifi projects in 2024: key features, token distribution, and how to buy them on CoinEx.</p>
                  </div>
                </Col>
                <Col lg={4}>
                <div className='blog-item'>
                    <img src={Cover3} alt="" />
                    <p className='mm'>Top 10 PolitiFi Projects In 2024 And How to Buy Their Tokens</p>
                    <p className='ss'>Explore the top 10 Politifi projects in 2024: key features, token distribution, and how to buy them on CoinEx.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Info
