import {IconPhone} from "@tabler/icons-react";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarCard from "../components/CarCard";


const data = [{name: 'Audi', image: CarImg1, price: 45}, {name: 'WV', image: CarImg2, price: 35}]

function CarList(props) {
    return (
        <>
            <div className="container">
                <div className="models-div">
                    {data.map((item, index) => {
                        return <CarCard image={item.image} />
                    })}

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
