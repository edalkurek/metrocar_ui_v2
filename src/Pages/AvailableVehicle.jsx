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
    const [currentScreen, setCurrentScreen] = useState('CarList');

    const [carDetails, setCarDetails] = useState({});
    const [equipmentDetails, setEquipmentDetails] = useState({});
    const [customerDetails, setCustomerDetails] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const handleCarSelection = (selectedCar) => {
        setCarDetails(selectedCar);
        setCurrentStep(2); // Geçişi ekipman seçimine yönlendir
    };

    const handleEquipmentSelection = (selectedEquipment) => {
        setEquipmentDetails(selectedEquipment);
        setCurrentStep(3); // Geçişi müşteri bilgilerine yönlendir
    };

    const handleCustomerDetails = (details) => {
        setCustomerDetails(details);
        setCurrentStep(4); // Tüm adımlar tamamlandı, sonucu göster
    };

    return (
        <>
            <section>
                <HeroPages name="RESERVATION" />
                <ReservationInfo pickUp={pickUp} dropOff={dropOff} pickTime={pickTime} dropTime={dropTime} />

                {/* Koşullu olarak gösterilecek bileşenler */}
                {currentStep === 1 && <CarList pickTime={pickTime} dropTime={dropTime} onCarSelect={handleCarSelection} />}
                {currentStep === 2 && <Equipment onEquipmentSelect={handleEquipmentSelection} />}
                {currentStep === 3 && <Reservation onCustomerDetails={handleCustomerDetails} />}

                <Footer />
            </section>
        </>
    );
}

export default AvailableVehicle;
