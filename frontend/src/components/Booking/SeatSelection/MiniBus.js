import {TbSteeringWheel} from 'react-icons/tb';
import './MiniBus.scss'

function MiniBus() {
  const seat = [
    "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20", "21"
  ]
const handleClick = (e) => {
  if(e.target.style.color === 'white'){
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black'
  }else{
    e.target.style.backgroundColor = '#1597BB';
    e.target.style.color = 'white'
  }
}
return <div className="mini-bus-seat-container">
<div className="steering">
<TbSteeringWheel/>
</div>
<div className="seats">
<div className="left-seats">
{seat.map((row, index) => {
    return index < 7 && <div className="left-seat" key={index} onClick={handleClick}>{row}</div>
})}
</div>
<div className="right-seats">
{seat.map((row, index) => {
    return index >= 7 && <div className="right-seat" key={index} onClick={handleClick}>{row}</div>
})}
</div>
</div>
</div>;
}

export default MiniBus
