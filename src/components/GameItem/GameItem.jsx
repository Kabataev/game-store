import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';
import GameBuy from "../Game-buy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGenre/GameGenre";
import "./game-item.scss";

function GameItem(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(setCurrentGame(props.game))
    navigate(`/app/${props.game.title}`)
  }
  return (
    <div className="game" onClick={handleClick}>
      <GameCover  image={props.img} />
      <div className="game__details">
        <span className="game__title">{props.title}</span>
        <div className="game__genre">{props.genres.map((genre) =>
         <GameGenre genre={genre} key={genre}/>)}</div>
        <div className="game__btn-buy">
          <GameBuy game={props.game} price={props.price} key={props.id} />
        </div>
      </div>
    </div>
  );
}

export default GameItem;
