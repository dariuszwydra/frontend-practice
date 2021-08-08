import './Content.css';
import TabContainer from './TabContainer/TabContainer.js';
import { useState } from 'react';

function Content() {

  const [tabSet1] = useState(['Page changes','Review of last issues']);
  const [tabSet2] = useState(['Visual UI Update Review','Sidebar changes']);
  const [tabSet3] = useState(['Crash update','Page visual UI Update Review','Sidebar update']);
  const [tabSet4] = useState(['Crash issue','Visual update & Crash resolve']);

  return (
    <div className='content'>
      <TabContainer date='19-07-2016' tabs={tabSet1}/>
      <TabContainer date='18-07-2016' tabs={tabSet2}/>
      <TabContainer date='15-07-2016' tabs={tabSet3}/>
      <TabContainer date='14-07-2016' tabs={tabSet4}/>
    </div>
  );
}

export default Content;
