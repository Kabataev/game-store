import { calcTotalPrice } from "../utilis";
import GameButton from "../game-button/GameButton";
import "./cart-menu.scss";
import GameDesc from "../GameDesc/GameDesc";

function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {items.length > 0
          ? items.map((game) => (
              <GameDesc
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)}сом</span>
          </div>
          <GameButton type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </GameButton>
        </div>
      ) : null}
    </div>
  );
}

export default CartMenu;
