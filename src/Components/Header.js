import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';
import { siteLogo } from '../config/config';
import dropdownImage from '../Assets/Images/menu.png';

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
          <Navbar.Brand href="#" className="">
            <img src={siteLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto" />
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
                    App 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/apps2" as={NavLink}>
                    App 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/apps3" as={NavLink}>
                    App 3
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
                    Flat 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/flat2" as={NavLink}>
                    Flat 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/flat3" as={NavLink}>
                    Flat 3
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/flat4" as={NavLink}>
                    Flat 4
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
                    Markets 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/markets2" as={NavLink}>
                    Markets 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/markets3" as={NavLink}>
                    Markets 3
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
                    Exchange 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/exchange2" as={NavLink}>
                    Exchange 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/exchange3" as={NavLink}>
                    Exchange 3
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
                    Futures 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/futures2" as={NavLink}>
                    Futures 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/futures3" as={NavLink}>
                    Futures 3
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
                    Finance 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/finance2" as={NavLink}>
                    Finance 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/finance3" as={NavLink}>
                    Finance 3
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
                    Promotion 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/promotion2" as={NavLink}>
                    Promotion 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/promotion3" as={NavLink}>
                    Promotion 3
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
                    More 1
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/more2" as={NavLink}>
                    More 2
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/more3" as={NavLink}>
                    More 3
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
              <NavDropdown.Item href="#login">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#signup">Sign Up</NavDropdown.Item>
            </NavDropdown>
          )}
          {screenWidth >= 1200 && (
            <>
              <button href="#" className="login-button">
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
