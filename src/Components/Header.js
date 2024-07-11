import React, { useState, useRef } from 'react';
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

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const timeoutRef = useRef(null);

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

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="" fluid>
        <div className="main-nav">
          <Navbar.Brand href="#" className="">
            <img src={siteLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
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
                <Nav.Link to="/" as={NavLink}>
                  <AppsIcon />
                </Nav.Link>
                {['Flat', 'Markets', 'Exchange', 'Futures', 'Finance', 'Promotion', 'More'].map((item, index) => (
                  <NavDropdown
                    key={index}
                    title={item}
                    show={showDropdown === index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                  >
                    <NavDropdown.Item to={`/${item.toLowerCase()}`} as={NavLink}>
                      {item} 1
                    </NavDropdown.Item>
                    <NavDropdown.Item to={`/${item.toLowerCase()}`} as={NavLink}>
                      {item} 2
                    </NavDropdown.Item>
                    <NavDropdown.Item to={`/${item.toLowerCase()}`} as={NavLink}>
                      {item} 3
                    </NavDropdown.Item>
                  </NavDropdown>
                ))}
                <div to="/special" className="newbie" as={NavLink}>
                  <span className='newbie-text'>
                    <span>Newbie Exclusive</span>
                  </span>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
        <div className="nav-right">
          <button href="#" className="login-button d-none d-lg-block">
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
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
