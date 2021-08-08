import './SidebarTab.css';

function SidebarTab(props) {
  return (
    <div className='sidebarTab' onClick={props.onClick} style={{background: props.background}}>
      <div className='textIconBox'>
        <img src={props.iconUrl} className='icon'/>
        <div className='text'>{props.text}</div>
      </div>
      <div className='counterBox'>
        {props.count}
      </div>
    </div>
  );
}

export default SidebarTab;
