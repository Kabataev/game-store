import "./game-desc.scss";

function GameDesc({ title, price, id }) {
  return (
    <div className="game-desc">
      <span>{title}</span>
      <div className="game-desc__price">
        <span>{price} сом</span>
      </div>
    </div>
  );
}

export default GameDesc;
