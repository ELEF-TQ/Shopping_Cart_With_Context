import React from 'react'
import './style.css'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/CartProvider'

const Product = ({prod}) => {
  const {
    state:{cart},
    dispatch
  } = CartState() ;
  
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
          {
            cart.some(p=>p.id === prod.id) ? (
              <Button variant='danger'>Remove From Cart</Button>
            ) : (
              <Button>{!prod.inStock ? "Out Of Stock" : "Add To Cart"}</Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
