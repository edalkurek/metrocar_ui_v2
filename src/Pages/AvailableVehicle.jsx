import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useLocation } from "react-router-dom";
import ReservationInfo from "../components/ReservationInfo";
import CarList from "../components/CarList";


function AvailableVehicle() {
  const location = useLocation();
  const { pickUp, dropOff, pickTime, dropTime } = location.state || {};

  return (
    <>
      <section className="models-section">
        <HeroPages name="RESERVATION" />

        <ReservationInfo
          pickUp={pickUp}
          dropOff={dropOff}
          pickTime={pickTime}
          dropTime={dropTime}
        />
        <CarList />
        <Footer />
      </section>
    </>
  );
}

export default AvailableVehicle;
