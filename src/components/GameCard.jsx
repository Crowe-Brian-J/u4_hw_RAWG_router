const GameCard = (props) => {
  // props.name, props.image, props.onClick

  return (
    <div className="card game-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.imgae} alt="" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.rating}</p>
      </div>
    </div>
  )
}

export default GameCard
