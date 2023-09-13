import './Checkout.scss'
function Checkout() {
  return (
    <div className="payment">
        <h2>
          <strong>
            <u>Booking Details</u>
          </strong>
        </h2>
        <div className="details">
          <div className="payee">
            <label htmlFor="payee name">Payee Name: </label>
            <input type="text" id="payee name" />
          </div>
          <div className="payee">
            from : <span className="ans">Mumbai</span>
          </div>
          <div className="payee">
            to : <span className="ans">goa</span>
          </div>
          <div className="payee">
            No. of seats : <span className="ans">3</span>
          </div>
          <div className="payee">
            Arrival time: <span className="ans">6am</span>
          </div>
          <div className="payee">
            Departure time: <span className="ans">9pm</span>
          </div>
        </div>
        <button className="btn">Book</button>
      </div>
  )
}

export default Checkout
