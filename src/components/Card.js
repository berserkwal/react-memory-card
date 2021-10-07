function Card(props) {
  return (
    <div className='card-wrapper'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
        alt={props.name}
      />
      <h3>{props.name.replaceAll('-', ' ')}</h3>
      <div className='types'>
        {props.types.map((item) => (
          <p className={`type ${item.type.name}`} key={item.type.name}>
            {item.type.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Card;
