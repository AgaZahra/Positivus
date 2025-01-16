import React from 'react';
import { useParams } from 'react-router-dom'; 

import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useGetProductByIdQuery } from '@/redux/api/product';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { data, error, isLoading } = useGetProductByIdQuery(id); 

  if (isLoading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Container>
      <Row className="g-3">
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={data.image}
              alt={data.title}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-danger">{data.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${data.price}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {data.category}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {data.description}
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
              <Button variant="primary" onClick={() => window.history.back()} className='m-5'>Back</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
