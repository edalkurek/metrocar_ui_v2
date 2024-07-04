import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useLocation } from "react-router-dom";
import ReservationInfo from "../components/ReservationInfo";
import CarList from "../components/CarList";
import Reservation from "../components/Reservation";
import Equipment from "../components/Equipment";
import Summary from "../components/Summary";
import axios from 'axios';

function AvailableVehicle() {
    const location = useLocation();
    const { pickUp, dropOff, pickTime, dropTime } = location.state || {};

    const [selectedCar, setSelectedCar] = useState({});
    const [selectedEquipment, setSelectedEquipment] = useState([]);
    const [customerDetails, setCustomerDetails] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    const handleCarSelection = (selectedCar) => {
        setSelectedCar(selectedCar);
        console.log("Selected Car:", selectedCar);
        setCurrentStep(2); // Geçişi ekipman seçimine yönlendir
    };

    const handleEquipmentSelection = (selectedEquipment) => {
        setSelectedEquipment(selectedEquipment);
        console.log("Selected Equipment:", selectedEquipment);
        setCurrentStep(3); // Geçişi müşteri bilgilerine yönlendir
    };

    const handleCustomerDetails = (details) => {
        setCustomerDetails(details);
        console.log("Customer Details:", details);
        setCurrentStep(4); // Tüm adımlar tamamlandı, sonucu göster
    };

    const handleConfirm = async () => {
        console.log("Selected Car:", selectedCar);
        console.log("Selected Equipment:", selectedEquipment);
        console.log("Customer Details:", customerDetails);
        console.log("pickUp     :", pickUp);
        console.log("dropOff    :", dropOff);


        const reservationData = {
            ...customerDetails,
            vehicleId: selectedCar.id,
            equipmentIds: selectedEquipment,
            startDate: pickTime,
            endDate: dropTime,
            pickupLocation: pickUp,
            dropoffLocation: dropOff
        };
        

        try {
            const response = await axios.post('/rentals', reservationData);
            if (response.status === 200) {
                console.log('Reservation successful');
                // Başarılı mesajı gösterebilir veya başka bir işlemi yapabilirsiniz
            } else {
                console.error('Failed to submit reservation');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                
                {currentStep === 4 && (
                    <Summary 
                        selectedCar={selectedCar} 
                        selectedEquipment={selectedEquipment} 
                        customerDetails={customerDetails} 
                        reservationInfo={{ pickUp, dropOff, pickTime, dropTime }}
                        onConfirm={handleConfirm}
                    />
                )}

                <Footer />
            </section>
        </>
    );
}

export default AvailableVehicle;
