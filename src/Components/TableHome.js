import React, { useState } from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import { Container, Col, Row } from 'react-bootstrap'
import GraphP from '../Assets/Images/graph-p.png'
import GraphN from '../Assets/Images/graph-n.png'
import Coin1 from '../Assets/Images/coin1.png'
import Coin2 from '../Assets/Images/coin2.png'
import Coin3 from '../Assets/Images/coin3.png'
import Coin4 from '../Assets/Images/coin4.png'
import Coin5 from '../Assets/Images/coin5.png'
import Coin6 from '../Assets/Images/coin6.png'
import Coin7 from '../Assets/Images/coin7.png'
import Coin8 from '../Assets/Images/coin8.png'


const TableHome = () => {

  const [key, setKey] = useState('tab1');

  return (
    <div className='table-home'  data-aos="zoom-out">
      <Container>
        <Row className='table-head'>
          <Col lg={9} sm={9}>
            <div className="header-wrapper">
              <h4 className='heading'>Top Trends</h4>
              <span>Crypto Leaderboard: Keep up to date, track, and analyze </span>
            </div>
          </Col>
          <Col lg={3} sm={3}>
            <div className="table-input">
              <input type="text" className='form-control' placeholder='Search' />
            </div>
          </Col>
        </Row>
        <Row>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="ranks"
          >
            <Tab eventKey="tab1" title="Hot">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="tab2" title="New">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="tab3" title="Gainers">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="tab4" title="Losers">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="tab5" title="Leaders">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="tab6" title="Market">
              <Table>
                <thead>
                  <tr>
                    <th>Coins</th>
                    <th>Price(USD)</th>
                    <th>24H Change</th>
                    <th>24H Value(USD)</th>
                    <th>Market Cap(USD)</th>
                    <th>Markets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin1} alt="" className='first-col' />
                        <span className='fw'>WATER</span>
                        <span className='sw'>WATER</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.0008899</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin2} alt="" className='first-col' />
                        <span className='fw'>TRUMP</span>
                        <span className='sw'>MAGA</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>6.033</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin3} alt="" className='first-col' />
                        <span className='fw'>DOG</span>
                        <span className='sw'>DOG•GO•TO•THE•MOON</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.004297</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin4} alt="" className='first-col' />
                        <span className='fw'>DJT</span>
                        <span className='sw'>TrumpCoin</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.009131</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin5} alt="" className='first-col' />
                        <span className='fw'>BILLY</span>
                        <span className='sw'>Billy</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.1415</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-19.03%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin6} alt="" className='first-col' />
                        <span className='fw'>GME</span>
                        <span className='sw'>GME</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.006086</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='positive'>+4.74%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphP} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin7} alt="" className='first-col' />
                        <span className='fw'>BODEN</span>
                        <span className='sw'>Jeo Boden</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.04007</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-23.41%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                  <tr className='body-row'>
                    <td>
                      <div className='cell'>
                        <img src={Coin8} alt="" className='first-col' />
                        <span className='fw'>TREMP</span>
                        <span className='sw'>Donald Tremp</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>0.003747</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='negative'>-6.60%</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>257.53K</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <span className='fw'>79.10M</span>
                      </div>
                    </td>
                    <td>
                      <div className="cell">
                        <img src={GraphN} alt="" className='' />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
          </Tabs>
        </Row>
      </Container>

    </div>
  )
}

export default TableHome
