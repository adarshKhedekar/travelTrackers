import './SearchBus.scss'
import { BiWalk, BiBus } from "react-icons/bi";

function SearchBus() {
  return (
    <div className="main-banner">
      <div className="text-container">
        <h1>FIND YOUR HOLIDAY</h1>
        <h1>DESTINATION</h1>
      </div>
      <div className="search-bus">
        <div className="input">
          <div className="logo">
            <span>
              <BiWalk />
            </span>
            <span>
              <BiBus />
            </span>
          </div>
          <input type="text" name="" id="" placeholder="FROM" />
        </div>
        <hr />
        <div className="input">
          <div className="logo">
            <span>
              <BiBus />
            </span>
            <span>
              <BiWalk />
            </span>
          </div>
          <input type="text" name="" id="" placeholder="TO"/>
        </div>
        <hr />
        <div className="search-name">
            SEARCH
            <BiBus/>
        </div>
      </div>
    </div>
  );
}

export default SearchBus;
