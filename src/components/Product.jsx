import React from 'react'
import './style.css'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({prod}) => {
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}} >
            <span>$ {prod.price}</span>
            {prod.fastDeleviry ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delevery</div>
            )}
            <Rating rating={prod.ratings}/>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
