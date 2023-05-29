import GameBuy from "../../Game-buy/GameBuy";
import GameCover from "../../GameCover/GameCover";
import GameGenre from "../../GameGenre/GameGenre";
import "./gp-content.scss";

function GamePageContent({ game }) {
  return (
    <div className="game-page__content">
      <div className="game-page__left">
        <iframe
          width="90%"
          height="400px"
          src={game.video}
          title="Yotube Video"
        ></iframe>
      </div>
      <div className="game-page__right">
        <GameCover image={game.image} />
        <p>{game.description}</p>
        <p className="game-page__secondary-text">
          Популярные метки этого продукта:
        </p>
        {game.genres.map((genre) => (
          <GameGenre genre={genre} key={genre} />
        ))}
        <div className="game-page__buy-game">
          <GameBuy id={game.id} game={game} price={game.price} />
        </div>
      </div>
    </div>
  );
}

export default GamePageContent;
