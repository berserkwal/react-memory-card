import { useState } from 'react';
import Dropdown from './Dropdown';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const enableHover = () => setIsHovered(true);
  const disableHover = () => setIsHovered(false);

  return (
    <header>
      <div className='logo-wrapper'>
        <img
          className='logo-img'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png'
          alt=''
        />
        <h2 className='logo-text'>Pokémon Memory Game</h2>
      </div>
      <nav className='nav' onMouseLeave={disableHover}>
        made by{' '}
        <span onMouseEnter={enableHover}>
          berserkwal <i className='fas fa-caret-down'></i>{' '}
        </span>
        <div className='hiddenZone'></div>
        {isHovered ? <Dropdown disableHover={disableHover} /> : null}
      </nav>
    </header>
  );
}

export default Header;
