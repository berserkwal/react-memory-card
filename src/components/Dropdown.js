function Dropdown(props) {
  return (
    <div className='dropMenu'>
      <a target='_blank' rel='noreferrer' href='https://berserkwal.github.io'>
        <i className='fas fa-external-link-alt'></i>
        <span>My Website</span>
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.github.com/berserkwal/react-memory-card'>
        <i className='fas fa-external-link-alt'></i>
        <span>Project Source Code</span>
      </a>
      <a target='_blank' rel='noreferrer' href='https://pokeapi.co/'>
        <i className='fas fa-external-link-alt'></i>
        <span>Powered by PokeAPI</span>
      </a>
    </div>
  );
}

export default Dropdown;
