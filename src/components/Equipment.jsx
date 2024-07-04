import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Equipment = ({ onEquipmentSelect }) => {
    const [servicesIncluded, setServicesIncluded] = useState([]);
    const [extras, setExtras] = useState([]);
    const [insuranceOptions, setInsuranceOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [selectedInsurance, setSelectedInsurance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/equipments');
                if (response.status === 200) {
                    const data = response.data;
                    setServicesIncluded(data.filter(item => item.equipmentType === 'INCLUDED_SERVICES'));
                    setExtras(data.filter(item => item.equipmentType === 'EXTRAS'));
                    setInsuranceOptions(data.filter(item => item.equipmentType === 'INSURANCE_OPTIONS'));
                } else {
                    console.error('Failed to fetch equipment options');
                }
            } catch (error) {
                console.error('Error fetching equipment data:', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleCheckboxChange = (selectedList, setSelectedList, id) => {
        setSelectedList(prevSelected => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(equipmentId => equipmentId !== id);
            } else {
                return [...prevSelected, id];
            }
        });
    };

    const handleSubmit = () => {
        const selectedEquipmentIds = [...selectedExtras, ...selectedInsurance];
        onEquipmentSelect(selectedEquipmentIds);
    };

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="equipment">
            <h2 className="title">Included Services</h2>
            <ul className="services-list">
                {servicesIncluded.map((service, index) => (
                    <li key={index} className="service-item">
                        <input
                            type="checkbox"
                            checked={true}
                            disabled={true}
                        />
                        {service.equipmentName} - {'Free'}
                    </li>
                ))}
            </ul>
            <h2 className="title">Extras (Optional)</h2>
            <ul className="extras-list">
                {extras.map((extra, index) => (
                    <li key={index} className="extra-item">
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(selectedExtras, setSelectedExtras, extra.id)}
                            checked={selectedExtras.includes(extra.id)}
                        />
                        {extra.equipmentName} - ${extra.equipmentPrice} {extra.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <h2 className="title">Insurance Options (Optional)</h2>
            <ul className="insurance-list">
                {insuranceOptions.map((option, index) => (
                    <li key={index} className="insurance-item">
                        <input
                            type="checkbox"
                            onChange={() => handleCheckboxChange(selectedInsurance, setSelectedInsurance, option.id)}
                            checked={selectedInsurance.includes(option.id)}
                        />
                        {option.equipmentName} - ${option.equipmentPrice} {option.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <button className="submit-btn" onClick={handleSubmit}>Proceed to Reservation</button>
        </div>
    );
};

export default Equipment;
