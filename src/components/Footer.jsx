import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '@/assets/media/img/Positivus.png'


const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>

          <Col sm={12} md={4} lg={8}>
          <img src={logo} alt="" />
          <p id='contact'>Contact us:</p>
          <p>1800.123.4567</p>
          <p>Email: info@positivus.com</p>
          <ul style={{ display: 'flex', justifyContent: 'start', padding: 0 }}>
      <li style={{ listStyleType: 'none', margin: '0  15px 0  0' }}>
        <FaFacebook size={20} />
      </li>
      <li style={{ listStyleType: 'none', margin: '0 15px' }}>
        <FaTwitter size={20}  />
      </li>
      <li style={{ listStyleType: 'none', margin: '0 15px' }}>
        <FaInstagram size={20} />
      </li>
      <li style={{ listStyleType: 'none', margin: '0 15px' }}>
        <FaLinkedin size={20}/>
      </li>
    </ul>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <ul>
            <li>About us</li>
            <li>Campaigns</li>
            <li>Get Involved</li>
            <li>Contact us</li>
          <input type="text"  placeholder='Email...'/>
          </ul>
          </Col>
        </Row>

        <Row>
          <div className="content" style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
            <p>© 2023 Positivus. All Rights Reserved.</p>
            <ul style={{ display: 'flex', justifyContent: 'start' }}>
              <li>Privacy Policy</li>
              <li>Terms oof Services</li>
            </ul>
          </div>

        </Row>
      </Container>

    </footer>
  )
}

export default Footer