import './index.css'

const ScoreCard = props => {
  const {score, restartGame} = props

  return (
    <div className="sc-div">
      <div className="scoreCard-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="para">YOUR SCORE</p>
        <h1 className="score">{score}</h1>
        <button className="button" onClick={restartGame}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="palyagain-icon"
          />
          <p>PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}
export default ScoreCard
