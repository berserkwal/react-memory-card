import Card from './Card';
import Loading from './Loading';

function Gameboard(props) {
  const arr = [
    {
      name: 'Vue',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'Vue',
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
  ];
  const cards = props.pokeData.map((item, index) => (
    <Card id={item.id} name={item.name} key={item.id} types={item.types} />
  ));

  // const content = props.isLoading ? <Loading /> : cards;

  return (
    <div className='gameboard'>
      {props.isLoading ? <Loading currentLevel={props.currentLevel} /> : cards}
    </div>
  );
}

export default Gameboard;
