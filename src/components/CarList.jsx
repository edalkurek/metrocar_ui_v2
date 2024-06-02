import { useEffect, useState } from "react";
import { IconPhone } from "@tabler/icons-react";
import CarCard from "./CarCard";
import axios from 'axios';

function CarList(props) {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetchAvailableVehicles();
    }, [props.pickTime, props.dropTime]);

    const fetchAvailableVehicles = async () => {
        try {
            const response = await axios.get(`/vehicles/available?startDate=${props.pickTime}&endDate=${props.dropTime}`);
            if (response.status === 200) {
                setVehicles(response.data);
            } else {
                console.error('Failed to fetch available vehicles');
            }
        } catch (error) {
            console.error('Error fetching available vehicles:', error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="models-div">
                    {vehicles.map((vehicle, index) => (
                        <CarCard key={index} vehicle={vehicle} onBook={() => props.onCarSelect(vehicle)} />
                    ))}
                </div>
            </div>
            <div className="book-banner">
                <div className="book-banner__overlay"></div>
                <div className="container">
                    <div className="text-content">
                        <h2>Book a car by getting in touch with us</h2>
                        <span>
                            <IconPhone width={40} height={40} />
                            <h3>(123) 456-7869</h3>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarList;
