import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Col style={{ padding: '20px' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem', height: '18rem' }} variant="top" src={'http://localhost:5000/images/' + product.img} />
        <Card.Body>
          <Card.Title>{product.product}</Card.Title>
          <Link to={`/products/${product.prodid}`  }>
            <Button variant="primary" >View</Button>
          </Link  >
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product