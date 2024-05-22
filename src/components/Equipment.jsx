import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Equipment = ({ onSubmit }) => {
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

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <div className="equipment">
            <h2 className="title">Dahil Olan Hizmetler</h2>
            <ul className="services-list">
                {servicesIncluded.map((service, index) => (
                    <li key={index} className="service-item">
                        <input type="checkbox" checked={service.available} readOnly />
                        {service.equipmentName} - {service.equipmentPrice > 0 ? `$${service.equipmentPrice} ${service.equipmentPricingType.toLowerCase()}` : 'Free'}
                    </li>
                ))}
            </ul>
            <h2 className="title">Ekstralar (İsteğe bağlı)</h2>
            <ul className="extras-list">
                {extras.map((extra, index) => (
                    <li key={index} className="extra-item">
                        <input type="checkbox" />
                        {extra.equipmentName} - ${extra.equipmentPrice} {extra.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <h2 className="title">Güvenceler (İsteğe bağlı)</h2>
            <ul className="insurance-list">
                {insuranceOptions.map((option, index) => (
                    <li key={index} className="insurance-item">
                        <input type="checkbox" />
                        {option.equipmentName} - ${option.equipmentPrice} {option.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <button className="submit-btn" onClick={onSubmit}>Proceed to Reservation</button>
        </div>
    );
};

export default Equipment;
