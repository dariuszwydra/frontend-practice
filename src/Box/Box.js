import './Box.css';
import Sidebar from '../Sidebar/Sidebar.js';
import Content from '../Content/Content.js';

function Box() {
  return (
    <div className='box'>
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default Box;
