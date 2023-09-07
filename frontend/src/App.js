import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import NoMatch from "./NoMatch";
import { useContext, useEffect } from "react";
import { Context } from "./utils/context";

function App() {
  const {setUser, setUserId} = useContext(Context)
  useEffect(() => {
    let loggedUserData = localStorage.getItem('user');
    if(loggedUserData){
      const userData = JSON.parse(loggedUserData);
      setUser(userData.username);
      setUserId(userData.id);
    }
  }, [setUser])
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//#240090, #190061

export default App;
