import './SingleDeck.scss'
import {TbSteeringWheel} from 'react-icons/tb'
function SingleDeck() {
    const seat = [
        "a1",
        "a2",
        "b1",
        "b2",
        "c1",
        "c2",
        "d1",
        "d2",
        "e1",
        "e2",
        "f1",
        "f2",
        "g1",
        "g2",
        "h1",
        "h2",
        "i1",
        "i2",
        "j1",
        "j2",
        "a3",
        "a4",
        "b3",
        "b4",
        "c3",
        "c4",
        "d3",
        "d4",
        "e3",
        "e4",
        "f3",
        "f4",
        "g3",
        "g4",
        "h3",
        "h4",
        "i3",
        "i4",
        "j3",
        "j4",
    ];
    const handleClick = (e) => {
      if(e.target.style.color === 'white'){
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'black'
      }else{
        e.target.style.backgroundColor = '#1597BB';
        e.target.style.color = 'white'
      }
    }
  return <div className="single-deck-seat-container">
    <div className="steering">
    <TbSteeringWheel/>
    </div>
    <div className="seats">
    <div className="left-seats">
    {seat.map((row, index) => {
        return index < 20 && <div className="left-seat" key={index} onClick={handleClick}>{row}</div>
    })}
    </div>
    <div className="right-seats">
    {seat.map((row, index) => {
        return index >= 20 && <div className="right-seat" key={index} onClick={handleClick}>{row}</div>
    })}
    </div>
    </div>
  </div>;
}

export default SingleDeck;
