import {NavLink} from 'react-router-dom'
import './header.scss'
import Cart from '../GameCart/Cart'

function Header() {
  return (
    <header className='header'>
      <div className="header__wrapper">
        <NavLink to='/' className="header__store-title">
          Game Store
        </NavLink>
      </div>
      <div className="header__wrapper header__cart-btn-wrapper">
        <Cart/>
      </div>
    </header>
  )
}

export default Header
