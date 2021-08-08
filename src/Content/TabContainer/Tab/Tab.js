import './Tab.css';
import { useState } from 'react';

function Tab(props) {

  const [active, setActive] = useState(false);

  // check if the tab is active (star marked). Return proper .svg file depending on the state.
  function isTabActive() {
    if (active) {
      return 'icon-star-active.svg';
    }
    return 'icon-star.svg'
  }

  return (
    <li className='tab'>
      {props.title}
      <img className='tabIcon' src={isTabActive()} alt='icon' onClick={() => setActive(!active)}/>
    </li>
  );
}

export default Tab;
