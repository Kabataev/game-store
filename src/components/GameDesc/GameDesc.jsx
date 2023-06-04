import { AiOutlineCloseCircle } from "react-icons/ai";
import "./game-desc.scss";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";

function GameDesc({ title, price, id }) {
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(deleteItemFromCart(id))
  }
  return (
    <div className="game-desc">
      <span>{title}</span>
      <div className="game-desc__price">
        <span>{price} сом</span>
        <AiOutlineCloseCircle
        size={25}
        className='game-desc__delete-icon'
        onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default GameDesc;
