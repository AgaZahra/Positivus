import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MainContent = ({img,title,desc}) => {
  return (
    <>
    <Container className='main-content my-5'>
        <Row>
            <Col sm={12} md={6} lg={6}>
             <div className="img-box">
                <img src={img} alt="err" />
             </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h2>{title}</h2>
              <p>{desc}</p>
            </Col>
        </Row>
    </Container>


    </>
  )
}

export default MainContent