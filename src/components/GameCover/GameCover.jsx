import './game-cover.scss'

function GameCover({image=''}) {
  return (
    <div className='game-cover' style={{ backgroundImage: `url(${image})` }}>
    </div>
  )
}

export default GameCover
