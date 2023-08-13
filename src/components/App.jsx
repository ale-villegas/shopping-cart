import React from 'react'

import Products from './Products'
import { UseFilters } from '../hooks/UseFilters'
import Filters from './Filters'
import mock from '../mocks/products.json'
import Header from './Header'
import Cart from './Cart'
import CartProvider from '../context/cartContext'

const App = () => {
  const products = mock.products

  const { filteredProducts } = UseFilters()

  const productToShow = filteredProducts(products)

  return (
    <div className='page'>
      <CartProvider>
        <Header />

        <Cart />

        <Filters />

        <Products products={productToShow} />
      </CartProvider>
    </div>
  )
}

export default App
