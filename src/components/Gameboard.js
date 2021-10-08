import Card from './Card';
import Loading from './Loading';

function Gameboard(props) {
  const cards = props.pokeData.map((item) => (
    <Card
      id={item.id}
      name={item.name}
      key={item.id}
      types={item.types}
      selectCard={props.selectCard}
    />
  ));

  return (
    <div className='gameboard'>
      {props.isLoading ? <Loading currentLevel={props.currentLevel} /> : cards}
    </div>
  );
}

export default Gameboard;
