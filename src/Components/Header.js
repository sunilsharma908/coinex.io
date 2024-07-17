import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';
import { siteLogo, siteName } from '../config/config';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import dropdownImage from '../Assets/Images/menu.png';
import Wallet from '../Assets/Images/wallet.png';
import Chain from '../Assets/Images/chain.png';
import Charity from '../Assets/Images/charity.png';
import C2c from '../Assets/Images/c2c.png'

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(null);
    }, 300);
  };

  const handleClick = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const dropdownToggle = (
    <img src={dropdownImage} alt="Dropdown Toggle" style={{ width: '25px', marginRight: '5px' }} />
  );

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <div className="main-nav">
          <Navbar.Brand to="/" className="" as={Link}>
            <img src={siteLogo} alt="" />
          </Navbar.Brand>
          <div className="ms-auto nav-side">
            <button className="login-nav d-lg-none d-block">Login</button>
            <button className='sign-nav d-lg-none d-block'>Sign Up</button>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img src={siteLogo} alt="" style={{ height: '35px' }} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <NavDropdown
                  title={<AppsIcon />}
                  show={showDropdown === 0}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(0)}
                >
                  <NavDropdown.Item to="/apps1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={Wallet} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          {siteName} Wallet
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/apps2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={Chain} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          {siteName} Block Explorer
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/apps3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={Charity} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          {siteName} Wallet
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/apps4" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={Wallet} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          {siteName} Wallet
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Flat"
                  show={showDropdown === 1}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(1)}
                >
                  <NavDropdown.Item to="/flat1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/flat2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Markets"
                  show={showDropdown === 2}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(2)}
                >
                  <NavDropdown.Item to="/markets1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/markets2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/markets3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Exchange"
                  show={showDropdown === 3}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(3)}
                >
                  <NavDropdown.Item to="/exchange1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/exchange2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/exchange3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Futures"
                  show={showDropdown === 4}
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(4)}
                >
                  <NavDropdown.Item to="/futures1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/futures2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/futures3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Finance"
                  show={showDropdown === 5}
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(5)}
                >
                  <NavDropdown.Item to="/finance1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/finance2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/finance3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Promotion"
                  show={showDropdown === 6}
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(6)}
                >
                  <NavDropdown.Item to="/promotion1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/promotion2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/promotion3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="More"
                  show={showDropdown === 7}
                  onMouseEnter={() => handleMouseEnter(7)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(7)}
                >
                  <NavDropdown.Item to="/more1" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/more2" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/more3" as={NavLink}>
                    <div className="menu-list">
                      <div className="img">
                        <img src={C2c} alt="" className='img-fluid' />
                      </div>
                      <div className="name">
                        <div className="title">
                          P2P Trading
                        </div>
                        <div className="desc">
                          Decentralized Multi-Cryptocurrency Wallet
                        </div>
                      </div>
                      <div className="icon">
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                <div to="/special" className="newbie" as={NavLink}>
                  <span className="newbie-text">
                    <span>Newbie Exclusive</span>
                  </span>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>

        <div className="nav-right d-none d-lg-flex">
          {screenWidth < 1200 && (
            <NavDropdown title={dropdownToggle} id="nav-dropdown">
              <NavDropdown.Item to="/" as={Link}>Log in</NavDropdown.Item>
              <NavDropdown.Item to="/" as={Link}>Sign Up</NavDropdown.Item>
            </NavDropdown>
          )}
          {screenWidth >= 1200 && (
            <>
              <button className="login-button">
                Log in
              </button>
              <button className="nav-right-btn">Sign Up</button>
              <span className="split"></span>
              <div className="d-icon">
                <DownloadIcon />
              </div>
              <span className="split"></span>
              <div className="l-icon">
                <LanguageIcon />
              </div>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
