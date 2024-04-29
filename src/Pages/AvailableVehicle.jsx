import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useLocation } from "react-router-dom";
import ReservationInfo from "../components/ReservationInfo";
import CarList from "../components/CarList";
import Reservation from "../components/Reservation";

function AvailableVehicle() {
  const location = useLocation();
  const { pickUp, dropOff, pickTime, dropTime } = location.state || {};
  const [showReservation, setShowReservation] = useState(false);  // Durumu yönetmek için state tanımlama

  return (
    <>
      <section>
        <HeroPages name="RESERVATION" />

        <ReservationInfo
          pickUp={pickUp}
          dropOff={dropOff}
          pickTime={pickTime}
          dropTime={dropTime}
        />
        
        {/* CarList ve Reservation bileşenlerini koşullu olarak göster */}
        {!showReservation ? (
          <CarList pickTime={pickTime} dropTime={dropTime} onBook={() => setShowReservation(true)} />
        ) : (
          <Reservation />
        )}

        <Footer />
      </section>
    </>
  );
}

export default AvailableVehicle;
