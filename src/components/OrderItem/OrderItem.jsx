import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from "react-icons/ai";
import GameCover from '../GameCover/GameCover'
import './order-item.scss'
import { deleteItemFromCart } from '../../redux/cart/reducer';

function OrderItem({game}) {
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className='order-item'>
      <div className="order-item__cover">
        <GameCover image={game.image}/>
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} сом</span>
        <AiOutlineCloseCircle
        size={25}
        className='order-item__delete-icon'
        onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default OrderItem
