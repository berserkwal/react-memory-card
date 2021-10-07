function Scoreboard(props) {
  return (
    <div className='board-wrapper'>
      <h3 className='board-current'>Current Score: {props.currentScore}</h3>
      <h3 className='board-best'>Best Score: {props.bestScore}</h3>
    </div>
  );
}

export default Scoreboard;
