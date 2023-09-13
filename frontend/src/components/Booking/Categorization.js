import './Categorization.scss'
function Categorization() {
  return (
    <div className="categorization">
        <div className="timing align">
          <strong>DEPARTURE TIME</strong>
          <div className="option">
            <input
              type="radio"
              name="BusType"
              id="before 6am"
              value="before 6am"
            />
            <label htmlFor="before 6am">Before 6 am</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="BusType"
              id="6 am to 12 pm"
              value="6 am to 12 pm"
            />
            <label htmlFor="6 am to 12 pm">6 am to 12 pm</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="BusType"
              id="12 pm to 6 pm"
              value="12 pm to 6 pm"
            />
            <label htmlFor="12 pm to 6 pm">12 pm to 6 pm</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="BusType"
              id="after 6pm"
              value="after 6pm"
            />
            <label htmlFor="after 6pm">After 6 pm</label>
          </div>
        </div>
        <div className="bus-types align">
          <strong>BUS TYPE</strong>
          <div className="option">
            <input
              type="radio"
              name="BusType"
              id="singleDeck"
              value="singleDeck"
            />
            <label htmlFor="singleDeck">Single Deck</label>
          </div>
          <div className="option">
            <input type="radio" name="BusType" id="Sleeper" value="Sleeper" />
            <label htmlFor="Sleeper">Sleeper</label>
          </div>
          <div className="option">
            <input type="radio" name="BusType" id="MiniBus" value="MiniBus" />
            <label htmlFor="MiniBus">Mini Bus</label>
          </div>
          <div className="option">
            <input type="radio" name="conditioner" id="AC" value="AC"/>
            <label htmlFor="AC">AC</label>
          </div>
          <div className="option">
            <input type="radio" name="conditioner" id="Non-AC" value="NonAC" />
            <label htmlFor="Non-AC">Non-AC</label>
          </div>
        </div>
        <div className="seat-availability align">
          <strong>SEAT AVAILABILITY</strong>
          <p>Single Seats (30)</p>
        </div>
        <div className="align">
          <strong>ARRIVAL TIME</strong>
          <div className="option">
            <input
              type="radio"
              name="ArrBusType"
              id="Arr before 6am"
              value="before 6am"
            />
            <label htmlFor="Arr before 6am">Before 6 am</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="ArrBusType"
              id="Arr 6 am to 12 pm"
              value="6 am to 12 pm"
            />
            <label htmlFor="Arr 6 am to 12 pm">6 am to 12 pm</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="ArrBusType"
              id="Arr 12 pm to 6 pm"
              value="12 pm to 6 pm"
            />
            <label htmlFor="Arr 12 pm to 6 pm">12 pm to 6 pm</label>
          </div>
          <div className="option">
            <input
              type="radio"
              name="ArrBusType"
              id="Arr after 6pm"
              value="after 6pm"
            />
            <label htmlFor="Arr after 6pm">After 6 pm</label>
          </div>
        </div>
      </div>
  )
}

export default Categorization
