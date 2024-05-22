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
        return <div>Loading...</div>;
    }

    return (
        <div className="rental-service-options">
            <h2>Dahil Olan Hizmetler</h2>
            <ul>
                {servicesIncluded.map((service, index) => (
                    <li key={index}>
                        <input type="checkbox" checked={service.available} readOnly />
                        {service.equipmentName} - {service.equipmentPrice > 0 ? `$${service.equipmentPrice} ${service.equipmentPricingType.toLowerCase()}` : 'Free'}
                    </li>
                ))}
            </ul>
            <h2>Ekstralar (İsteğe bağlı)</h2>
            <ul>
                {extras.map((extra, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {extra.equipmentName} - ${extra.equipmentPrice} {extra.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <h2>Güvenceler (İsteğe bağlı)</h2>
            <ul>
                {insuranceOptions.map((option, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {option.equipmentName} - ${option.equipmentPrice} {option.equipmentPricingType.toLowerCase()}
                    </li>
                ))}
            </ul>
            <button onClick={onSubmit}>Proceed to Reservation</button>
        </div>
    );
};

export default Equipment;
