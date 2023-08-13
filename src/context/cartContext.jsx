import { createContext, useReducer, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [isActiveCart, setIsActiveCart] = useState(false)
    const cartReducer = (cart, action) => {
        const {type, payload} = action

        const productInCartIndex = payload && cart.findIndex(product => product.id === payload.id)

        switch (type) {
            case 'ADD_PRODUCT':

                if (productInCartIndex >= 0) {
                    // eslint-disable-next-line no-undef
                    const newCart = structuredClone(cart)
                    newCart[productInCartIndex].quantity += 1
                    return newCart
                }

            return [...cart,
               {...payload,
              quantity : 1}]

              case 'REMOVE_ONE' :
                if (productInCartIndex >= 0 && payload.quantity > 1) {
                  // eslint-disable-next-line no-undef
                  const newCart = structuredClone(cart)
                  newCart[productInCartIndex].quantity -= 1
                  return newCart
              }

              return cart.filter((product) => product.id !== payload.id)

              case 'EMPTY_CART':

              return []

        }
    }
    const [cart, dispatchCart] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{cart, dispatchCart, isActiveCart, setIsActiveCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
