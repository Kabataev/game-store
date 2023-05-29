import GameButton from '../game-button/GameButton'
import { useDispatch, useSelector } from 'react-redux'
import {deleteItemFromCart, setItemInCart} from '../../redux/cart/reducer'
import  './game-buy.scss'

function GameBuy(props) {
  const dispatch = useDispatch()
  const items =  useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === props.game.id)
 

  function handleClickGameBtn(e){
    e.stopPropagation();
    if(isItemInCart){
      dispatch(deleteItemFromCart(props.game.id))
    }else{
      dispatch(setItemInCart(props.game))
    }
  }
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{props.price}сом</span>
      <GameButton
      type={isItemInCart ? "secondary" : 'primary'}
      onClick={handleClickGameBtn}>
        {isItemInCart ?  "Убрать из корзины" :  "В Корзину"}
      </GameButton>
    </div>
  )
}

export default GameBuy
