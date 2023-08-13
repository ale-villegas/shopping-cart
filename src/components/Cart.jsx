
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const {cart, addItem, removeItem, isActiveCart, totalPrice, emptyCart, activeCart} = useCart()
  return (
    <div className={isActiveCart ? 'cart' : 'inactive-cart'}>
      <div className='close-cart' onClick={activeCart}>X</div>
      <div className='box-scroll'>
        {cart && cart.map(({thumbnail, title, price, id, quantity}) => {
        return (
          <div className='product-cart' id={id}>
            <span className='title-cart'>{title}</span>

            <img src={thumbnail} alt={title} />
            <span>${price}</span>
            <div className='quantity'>
              <p>Quantity: {quantity}</p>
              <div className='btn-actions-cart'>
                <button onClick={() => addItem(thumbnail, title, price, id, quantity)} className='category'>+</button>
                <button onClick={() => removeItem(id, quantity)} className='category'>-</button>
              </div>
            </div>

          </div>
        )
      })}
        {

        cart.length > 0 ?
          <div className='total'>
            <button  className='category'onClick={emptyCart}>Empty Cart</button>
            <strong> Total : $ {totalPrice}</strong>

          </div>
        : <strong>Your shopping cart is empty</strong>
      }
      </div>
    </div>

  )
}

export default Cart
