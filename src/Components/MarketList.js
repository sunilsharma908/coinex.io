import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bitcoin from '../Assets/Images/bitcoin.png'
import CoinEx from '../Assets/Images/favicon.png'
import Xcoin from '../Assets/Images/ximg.png'

const MarketList = () => {
  return (
    <div className='market-list'>
      <Container>
        <Row  data-aos="flip-up">
          <Col lg={3} sm={6} xs={6}>
            <div className="market-item">
              <div className="leading">
                <div className="coin">
                  <img src={Bitcoin} alt="" />
                </div>
                <span>BTC/USDT</span>
                <div className='percent-negative'>-0.19%</div>
              </div>
              <div className="sub-num">
                <span>57478.08</span>
              </div>
              <div className="end-num">
                <span>≈ 0.00001637 USD</span>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={6}>
            <div className="market-item">
              <div className="leading">
                <div className="coin">
                  <img src={CoinEx} alt="" />
                </div>
                <span>CET/USDT</span>
                <div className='percent-negative'>-0.19%</div>
              </div>
              <div className="sub-num">
                <span>57478.08</span>
              </div>
              <div className="end-num">
                <span>≈ 0.00001637 USD</span>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={6}>
            <div className="market-item">
              <div className="leading">
                <div className="coin">
                  <img src={Xcoin} alt="" />
                </div>
                <span>BTC/USDT</span>
                <div className='percent-negative'>-0.19%</div>
              </div>
              <div className="sub-num">
                <span>57478.08</span>
              </div>
              <div className="end-num">
                <span>≈ 0.00001637 USD</span>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} xs={6}>
            <div className="market-item">
              <div className="leading">
                <div className="coin">
                  <img src={Bitcoin} alt="" />
                </div>
                <span>BTC/USDT</span>
                <div className='percent-negative'>-0.19%</div>
              </div>
              <div className="sub-num">
                <span>57478.08</span>
              </div>
              <div className="end-num">
                <span>≈ 0.00001637 USD</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MarketList;
