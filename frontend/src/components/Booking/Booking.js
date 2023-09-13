import "./Booking.scss";
import Categorization from "./Categorization";
import Checkout from "./Checkout";
import SeatSelection from "./SeatSelection/SeatSelection";

function Booking() {
  return (
    <div className="booking-container">
      <Categorization />
      <SeatSelection/>
      <Checkout/>
    </div>
  );
}

export default Booking;
