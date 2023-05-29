import {BsCart2} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import CartMenu from '../CartMenu/CartMenu'
import { useState } from 'react'
import ItemsInCart from '../Items-in-cart/ItemsInCart'
import { useCallback} from 'react';

import './cart.scss'

function Cart() {
  const [isCartMenuVisible , setIsCartMenuVisible] = useState(false)
  const items = useSelector(state =>state.cart.itemsInCart)
  const totalPrice = items.reduce((acc , game) => acc +=game.price,0)
  const navigate = useNavigate()

  const handleClick = useCallback(()=>{
    setIsCartMenuVisible(false)
    navigate('/order')
  },[navigate])
  
  return (
    <div className='cart'>
      <ItemsInCart quantity={items.length}/>
      <BsCart2 size={25} className='cart__icon' onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
      {totalPrice > 0 ? <span className='cart__total-price'>{totalPrice} som</span> : null}
      {isCartMenuVisible ? <CartMenu items={items} onClick={handleClick}/>:null }
    </div>
  )
}

export default Cart
