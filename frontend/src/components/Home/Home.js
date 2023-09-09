import "./Home.scss";
import Header from "../Header/Header";
import SearchBus from "./SearchBus/SearchBus";


function Home() {
  return (
    <>
      <div className="home-container">
        <Header />
        <SearchBus/>
      </div>
    </>
  );
}

export default Home;
