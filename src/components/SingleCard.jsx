import React from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { useGetProductsQuery } from '@/redux/api/product';
import {  useNavigate } from 'react-router-dom';

const SingleCard = () => {
  const navigate=useNavigate();
  const { data, error, isLoading } = useGetProductsQuery(); 

  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Container>
  <Row className="g-3">
    {data.map((product) => (
      <Col key={product.id} sm={6} md={4} lg={3}>
        <Card className="my-card">
          <div style={{ width: '90%', height: '350px', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <Card.Body>
            <Card.Text>
              <span>Qiymət: ${product.price}</span>  <br />
              <span>Kategoriya: {product.category}</span>
            </Card.Text>
            <Card.Title className="text-danger">{product.title}</Card.Title>
            <Card.Text>
              {product.description.slice(0, 50)}...
            </Card.Text>
            <Button
                  variant="primary"
                  onClick={() => navigate(`/product/${product.id}`)} 
                >
                  Learn more
                </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

  );
};

export default SingleCard;
