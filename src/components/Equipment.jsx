import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Equipment = ({ onEquipmentSelect }) => {
    const [servicesIncluded, setServicesIncluded] = useState([]);
    const [extras, setExtras] = useState([]);
    const [insuranceOptions, setInsuranceOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/equipments');
                if (response.status === 200) {
                    const data = response.data;
                    setServicesIncluded(data.filter(item => item.equipmentType === 'INCLUDED_SERVICES').map(item => ({ ...item, available: false })));
                    setExtras(data.filter(item => item.equipmentType === 'EXTRAS').map(item => ({ ...item, available: false })));
                    setInsuranceOptions(data.filter(item => item.equipmentType === 'INSURANCE_OPTIONS').map(item => ({ ...item, available: false })));
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

    const handleCheckboxChange = (list, setList, index) => {
        const newList = [...list];
        newList[index].available = !newList[index].available;
        setList(newList);
    };

    const handleSubmit = () => {
        const selectedEquipment = {
            servicesIncluded: servicesIncluded.filter(item => item.available),
            extras: extras.filter(item => item.available),
            insuranceOptions: insuranceOptions.filter(item => item.available)
        };
        onEquipmentSelect(selectedEquipment);
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
                            checked={service.available}
                            onChange={() => handleCheckboxChange(servicesIncluded, setServicesIncluded, index)}
                        />
                        {service.equipmentName} - {service.equipmentPrice > 0 ? `$${service.equipmentPrice} ${service.equipmentPricingType.toLowerCase()}` : 'Free'}
                    </li>
                ))}
            </ul>
            <h2 className="title">Extras (Optional)</h2>
            <ul className="extras-list">
                {extras.map((extra, index) => (
                    <li key={index} className="extra-item">
                        <input
                            type="checkbox"
                            checked={extra.available}
                            onChange={() => handleCheckboxChange(extras, setExtras, index)}
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
                            checked={option.available}
                            onChange={() => handleCheckboxChange(insuranceOptions, setInsuranceOptions, index)}
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
