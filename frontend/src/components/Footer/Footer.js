import { FaLocationArrow,FaMobileAlt, FaEnvelope} from 'react-icons/fa'
import Payment from '../../assets/payment.jpeg'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          Explore the world and document your journeys with our intuitive travel tracker. Effortlessly plan your trips, record memorable experiences, and share your adventures with fellow travelers. Discover new destinations and keep your travel memories alive. Start tracking your travels today!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
              <FaLocationArrow/>
              <div className="text">Ghartan pada No. 2, Dahisar East, Mumbai, 400068</div>
          </div>
          <div className="c-item">
              <FaMobileAlt/>
              <div className="text">Phone: 0046 2003 3415</div>
          </div>
          <div className="c-item">
              <FaEnvelope/>
              <div className="text">Email: travel@trackers.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Single Deck Bus</span>
          <span className="text" >Double Deck Bus</span>
          <span className="text" >Minibus</span>
          <span className="text" >Shuttle Bus</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={() => navigate('/')}>Home</span>
          <span className="text" onClick={() => navigate('/about')}>About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">TRAVELTRACKERS 2023 CREATED BY ADK, PREMIUM E-COMMERCE SOLUTIONS.</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
