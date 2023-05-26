import GameBuy from "../Game-buy/GameBuy";
import GameCover from "../GameCover/GameCover";
import GameGenre from "../GameGenre/GameGenre";
import "./game-item.scss";

function GameItem(props) {
  return (
    <div className="game">
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
