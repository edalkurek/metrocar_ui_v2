import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useLocation } from "react-router-dom";
import ReservationInfo from "../components/ReservationInfo";
import CarList from "../components/CarList";
import Reservation from "../components/Reservation";
import Equipment from "../components/Equipment";

function AvailableVehicle() {
    const location = useLocation();
    const { pickUp, dropOff, pickTime, dropTime } = location.state || {};
    const [currentScreen, setCurrentScreen] = useState('CarList');  // Başlangıç ekranı olarak 'CarList'

    const navigateToEquipment = () => {
        setCurrentScreen('Equipment');
    };

    const navigateToReservation = () => {
        setCurrentScreen('Reservation');
    };

    return (
        <>
            <section>
                <HeroPages name="RESERVATION" />
                <ReservationInfo pickUp={pickUp} dropOff={dropOff} pickTime={pickTime} dropTime={dropTime} />
                
                {/* Koşullu olarak gösterilecek bileşenler */}
                {currentScreen === 'CarList' && <CarList pickTime={pickTime} dropTime={dropTime} onBook={navigateToEquipment} />}
                {currentScreen === 'Equipment' && <Equipment onSubmit={navigateToReservation} />}
                {currentScreen === 'Reservation' && <Reservation />}
                
                <Footer />
            </section>
        </>
    );
}

export default AvailableVehicle;
