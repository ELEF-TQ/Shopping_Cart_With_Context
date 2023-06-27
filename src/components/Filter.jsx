import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating'
import { useState } from 'react';
import './style.css'


const Filter = () => {
    const [rate , setRate] = useState(3);
  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <Form>
            <Form.Check 
                inline
                type="radio"
                name="group1"
                label="Ascending"
                id={`inline-1`}
            />
            <Form.Check
                inline
                type="radio"
                name="group1"
                label="Descending"
                id={`inline-2`}
            />
       
           <Form.Check 
                inline
                type="checkbox"
                name="group2"
                label="Inclue Out Of Stock"
                id={`inline-3`}
            />
            <Form.Check
                inline
                type="checkbox"
                name="group3"
                label="Fast Delivery Only"
                id={`inline-4`}
            />
            
            <br/>
            <label style={{paddingRight:10}}> Rating : </label>
            <Rating 
             rating={rate}
             style={{cursor:"pointer"}} 
             onClick={(i)=>setRate(i+1)}
            /> 
            <br/>
            <Button variant="light">Clear Filters</Button>
        </Form>
      
    </div>
  )
}

export default Filter
