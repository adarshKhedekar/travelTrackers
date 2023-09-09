import { useContext, useState } from "react";
import "./Header.scss";
import { FaUserCircle } from "react-icons/fa";
import {BiSolidUpArrow, BiSolidDownArrow} from "react-icons/bi"
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState();

  const handleToggle = () => {
    setDropDown(prevState => !prevState)
  }
  return (
    <header className="main-header">
      <div className="left-container">
        <h1 onClick={() => navigate('/')}>TravelTrackers</h1>
      </div>
      <div className="right-container">
        <div className="users-profile">
          {user ? (
            <div className="user" onClick={handleToggle}>
              <span>
                <FaUserCircle/>
              </span>
              <span>{user}</span>
              {dropDown ? <span><BiSolidUpArrow size={10}/></span> : <span><BiSolidDownArrow size={10}/></span>}
            </div>
          ) : (
            <div className="login" onClick={()=> navigate('/login')}>LOGIN</div>
          )}
        </div>
        <div className="about">About</div>
      </div>
    </header>
  );
}

export default Header;
