function Loading(props) {
  return (
    <div className='loading'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png'
        alt=''
      />{' '}
      <h3>Loading Level {props.currentLevel}</h3>
    </div>
  );
}

export default Loading;
