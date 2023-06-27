import React from 'react';
import { CartState } from '../context/CartProvider';
import Product from './Product';
import './style.css';
import Filter from './Filter';

const Home = () => {
  const state = CartState();
  const products = state && state.products; // Add null check here
  
  return (
    <div className='home'>
      <Filter/>
      <div className="productContainer">
        {products && products.map((prod) => {
          return <Product prod={prod} key={prod.id}></Product>;
        })}
      </div>
    </div>
  );
};

export default Home;
