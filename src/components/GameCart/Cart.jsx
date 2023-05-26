import {BsCart2} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import './cart.scss'
import CartMenu from '../CartMenu/CartMenu'
import { useState } from 'react'
import ItemsInCart from '../Items-in-cart/ItemsInCart'

function Cart() {
  const [isCartMenuVisible , setIsCartMenuVisible] = useState(false)
  const items = useSelector(state =>state.cart.itemsInCart)
  const totalPrice = items.reduce((acc , game) => acc +=game.price,0)
  // function handleClick(){
  //   return <CartMenu/>
  // }
  return (
    <div className='cart'>
      <ItemsInCart quantity={items.length}/>
      <BsCart2 size={25} className='cart__icon' onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? <span className='cart__total-price'>{totalPrice} som</span> : null}
      {isCartMenuVisible ? <CartMenu items={items} onClick={()=>null}/>:null }
    </div>
  )
}

export default Cart
