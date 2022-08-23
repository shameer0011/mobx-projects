import React from 'react'
import {useContext} from 'react';
import ProductContext from '../contexts/productContext/productContext'
const products = () => {
  const productContext = useContext(ProductContext)
  console.log(productContext)
  return (
    <div>products</div>
  )
}

export default products