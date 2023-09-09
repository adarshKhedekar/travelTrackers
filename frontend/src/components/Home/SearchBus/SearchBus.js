import { useRef, useState } from 'react';
import './SearchBus.scss'
import { BiWalk, BiBus } from "react-icons/bi";
import {SlCalender} from 'react-icons/sl';
import {useNavigate} from 'react-router-dom'

function SearchBus() {
  const sourceRef = useRef();
  const destRef = useRef();
  const dateRef = useRef();
  const [inputIsValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    let src = sourceRef.current.value;
    let des = destRef.current.value;
    let date = dateRef.current.value;
    if(inputIsValid){
      navigate(`/booking/${src}-${des}-${date}`);
    }
  }

  return (
    <div className="main-banner">
      <div className="text-container">
        <h1>FIND YOUR HOLIDAY</h1>
        <h1>DESTINATION</h1>
      </div>
      <div className="search-bus">
        <div className="input">
          <div className="logo">
            <span className='effect'>
              <BiWalk />
            </span>
            <span>
              <BiBus />
            </span>
          </div>
          <input type="text" placeholder="FROM" ref={sourceRef} />
        </div>
        <hr />
        <div className="input">
          <div className="logo">
            <span className='effect'>
              <BiBus />
            </span>
            <span>
              <BiWalk />
            </span>
          </div>
          <input type="text" placeholder="TO" ref={destRef}/>
        </div>
        <hr />
        <div className="input">
          <div className="logo date">
            <span><SlCalender size={27}/></span>
          </div>
          <input type="date" ref={dateRef}/>
        </div>
        <hr />
        <div className="search-name" onClick={handleSubmit}>
            SEARCH
            <BiBus/>
        </div>
      </div>
    </div>
  );
}

export default SearchBus;
