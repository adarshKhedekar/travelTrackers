import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import ScrollToTop from "./ScrollToTop";
import NoMatch from "./NoMatch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Booking from "./components/Booking/Booking";
import { useContext, useEffect } from "react";
import { Context } from "./utils/context";

//add google maps for tracking
function App() {
  const { setUser, setUserId } = useContext(Context);
  useEffect(() => {
    let loggedUserData = localStorage.getItem("user");
    if (loggedUserData) {
      const userData = JSON.parse(loggedUserData);
      setUser(userData.username);
      setUserId(userData.id);
    }
  }, [setUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/booking/:id"
            element={
              <>
                <Header />
                <Booking />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NoMatch />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
