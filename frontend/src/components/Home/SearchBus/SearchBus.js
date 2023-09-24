import { useRef } from 'react';
import './SearchBus.scss'
import { BiWalk, BiBus } from "react-icons/bi";
import {SlCalender} from 'react-icons/sl';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

function SearchBus() {
  const sourceRef = useRef();
  const destRef = useRef();
  const dateRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = () => {
    let src = sourceRef.current.value;
    let des = destRef.current.value;
    let date = dateRef.current.value;
    let dummyDate = new Date(date);
    if(src === 'FROM' || des === 'TO' || date === ''){
      if(src === 'FROM'){
        toast.error('Please fill the source field')
      }else if(des === 'TO'){
        toast.error('Please fill the destination field')
      }else{
        toast.error('Please fill the date field')
      }
    }
    else if(src === des){
      toast.error('Source and Destination Cannot be Same');
      return;
    }
    else if(Date.now() > dummyDate.getTime()){
      toast.error('Please select a future date');
      return;
    }
    else{
      navigate(`/booking/${src}-${des}-${date}`);
    }
  }

  return (
    <>
    <ToastContainer/>
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
          <select name="source" id="source" ref={sourceRef}>
            <option selected default hidden>FROM</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Banglore">Banglore</option>
          </select>
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
          <select name="destination" id="destination" ref={destRef} >   
            <option selected default hidden>TO</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Banglore">Banglore</option>
          </select>
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
    </>
  );
}

export default SearchBus;
