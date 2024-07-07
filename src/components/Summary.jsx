import React from 'react';

const Summary = ({ selectedCar, selectedEquipment, customerDetails, reservationInfo, onConfirm }) => {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <div className="summary-section">
                <h3>Car Details</h3>
                <p>Brand: {selectedCar.brand}</p>
                <p>Model: {selectedCar.model}</p>
            </div>
            <div className="summary-section">
                <h3>Equipment Details</h3>
                <p>{Array.isArray(selectedEquipment) ? selectedEquipment.map(equip => equip.name).join(', ') : ''}</p>
            </div>
            <div className="summary-section">
                <h3>Customer Details</h3>
                <p>Name: {customerDetails.name}</p>
                <p>Email: {customerDetails.email}</p>
                <p>Phone: {customerDetails.phoneNumber}</p>
            </div>
            <div className="summary-section">
                <h3>Reservation Details</h3>
                <p>Pick-Up: {reservationInfo.pickUp}</p>
                <p>Drop-Off: {reservationInfo.dropOff}</p>
                <p>Pick-Up Time: {reservationInfo.pickTime}</p>
                <p>Drop-Off Time: {reservationInfo.dropTime}</p>
            </div>
            <button onClick={onConfirm}>Confirm Reservation</button>
        </div>
    );
};

export default Summary;
