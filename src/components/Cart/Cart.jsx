import {BsCart2} from 'react-icons/bs'
import './cart.scss'

function Cart() {
  return (
    <div className='cart'>
      <BsCart2 size={25} className='cart__icon'/>
      <span className='cart__total-price'>2314 som</span>
    </div>
  )
}

export default Cart
