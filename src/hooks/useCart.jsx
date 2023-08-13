import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const useCart = () => {
const {cart, dispatchCart, isActiveCart, setIsActiveCart} = useContext(CartContext)
const totalPrice = cart.reduce((acumulador, item) => acumulador + item.quantity * item.price, 0).toFixed(2)
const totalItems = cart.reduce((acumulador, item) => acumulador + item.quantity, 0)

const activeCart = () => {
  setIsActiveCart(!isActiveCart)
}

const addItem = (thumbnail, title, price, id, quantity) => {
  dispatchCart({
    type : 'ADD_PRODUCT',
    payload: {title, id, price, thumbnail, quantity}
  })
}

const removeItem = (id, quantity) => {
  dispatchCart({
    type : 'REMOVE_ONE',
    payload: {id, quantity}
  })
}
const emptyCart = () => {
    dispatchCart({
      type: 'EMPTY_CART'
    })
      }

      return {emptyCart, removeItem, addItem, totalPrice, cart, activeCart, isActiveCart, totalItems}
}
