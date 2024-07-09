import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bitcoin from '../Assets/Images/bitcoin.png'

const MarketList = () => {
  return (
    <div className='market-list'>
      <Container>
        <Row>
          <Col lg={3}>
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
          <Col lg={3}>
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
          <Col lg={3}>
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
          <Col lg={3}>
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
