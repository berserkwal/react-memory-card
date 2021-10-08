function Scoreboard(props) {
  return (
    <div className='board-wrapper'>
      <h3 className='board-level'>Level: {props.currentLevel}</h3>
      <div className='board-score'>
        <h3 className='score-current'>Current Score: {props.currentScore}</h3>
        <h3 className='score-best'>Best Score: {props.bestScore}</h3>
      </div>
    </div>
  );
}

export default Scoreboard;
