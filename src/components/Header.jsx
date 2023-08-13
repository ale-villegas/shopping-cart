import { useCart } from '../hooks/useCart'
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
  const {activeCart, totalItems} = useCart()

  return (
    <header>
      <nav>
        <ul>
          <li>
                    E-Commerce
                </li>

          <li onClick={activeCart} className='li-cart'>
            <FaShoppingCart size={25} />
            <span className='number-cart'>{totalItems}</span>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header
