import './TabContainer.css';
import Tab from './Tab/Tab.js';

function TabContainer(props) {

  const itemsList = props.tabs.map((title) =>
  <Tab title={title} icon='icon-star.svg'/>
);

  return (
    <div className='tabContainer'>
      <div className='date'>{props.date}</div>
      <div className='itemContainer'>
        <ul className='itemsList'>
          {itemsList}
        </ul>
      </div>
    </div>
  );
}

export default TabContainer;
