import MacButtons from './MacButtons/MacButtons';
import './Sidebar.css';
import SidebarTab from './SidebarTab/SidebarTab.js'
import { useState } from 'react';

function Sidebar() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='sidebar' onClick={() => setSelectedIndex(0)}>
      <MacButtons/>
      <SidebarTab background={selectedIndex == 1 && '#292a48'} text='All' iconUrl='icon-github.svg' count='12' onClick={(e) => { e.stopPropagation(); setSelectedIndex(1); }}/>
      <SidebarTab background={selectedIndex == 2 && '#292a48'} text='Open' iconUrl='icon-open-issue.svg' count='4' onClick={(e) => { e.stopPropagation(); setSelectedIndex(2); }}/>
      <SidebarTab background={selectedIndex == 3 && '#292a48'} text='Closed' iconUrl='icon-closed-issue.svg' count='8' onClick={(e) => { e.stopPropagation(); setSelectedIndex(3); }}/>
    </div>
  );
}

export default Sidebar;
