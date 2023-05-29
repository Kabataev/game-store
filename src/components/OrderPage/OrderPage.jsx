import { useSelector } from 'react-redux'
import './order-page.scss'
import OrderItem from '../OrderItem/OrderItem'
import { calcTotalPrice } from '../utilis'

function OrderPage() {
  const items = useSelector(state => state.cart.itemsInCart)

  if(items.length < 1){
    return <h1>Ваша корзина пуста</h1>
  }
  return (
    <div className='order-page'>
      <div className="order-page__left">
        {items.map(game => <OrderItem key={game} game={game}/>)}
      </div>

      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} сом
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderPage
