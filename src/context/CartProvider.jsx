import React, { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';
import { useContext, useReducer } from 'react';

const CartContext = createContext();
faker.seed(99);
const CartProvider = ({ children }) => {
  const products = [...Array(20)].map((_, index) => ({
    id: index,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
    inStock: faker.number.bigInt(),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({ min: 0, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const CartState = () => {
  const state = useContext(CartContext);
  return state;
};
