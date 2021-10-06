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
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png'
          alt=''
        />
        <h2 className='logo-text'>JS Frameworks Memory Game</h2>
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
