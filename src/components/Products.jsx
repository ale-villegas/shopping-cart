import React, { useContext } from 'react'
import { UseFilters } from '../hooks/UseFilters'
import { CartContext } from '../context/cartContext'

const Products = ({products}) => {
    const {selectCategory} = UseFilters()
    const {dispatchCart} = useContext(CartContext)

    const addProduct = (id, title, price, thumbnail) => {
      dispatchCart({
        type : 'ADD_PRODUCT',
        payload: {title, id, price, thumbnail}
      })
    }
  return (
    <main>
      <div className='box-list-products'>
        {
     products.map(({title, id, description, category, thumbnail, price}) => {
          return (
            <div key={id} className='product'>
              <div className='text'>
                <h4> {title} </h4>
                <p>{description}</p>
              </div>
              <img src={thumbnail} alt={title} />
              <div>
                <button className='category' onClick={() => selectCategory(category)}>{category}</button>

                <button className='category' onClick={() => addProduct(id, title,  price, thumbnail)}>Add to cart</button>
              </div>
              <strong>{price} $$</strong>
            </div>
          )
      })
  }
      </div>
    </main>
  )
}

export default Products
