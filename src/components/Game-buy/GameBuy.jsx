import GameButton from '../game-button/GameButton'
import  './game-buy.scss'

function GameBuy(props) {
  return (
    <div className='game-buy'>
      <span className='game-buy__price'>{props.price}сом</span>
      <GameButton
      type='primary'
      onClick={ () => null}>
        В Корзину
      </GameButton>
    </div>
  )
}

export default GameBuy
