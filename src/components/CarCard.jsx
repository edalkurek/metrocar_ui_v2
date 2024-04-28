import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import CarImg1 from "../images/cars-big/audi-box.png";

function CarCard(props) {
  const { vehicle } = props;

  return (
    <div className="models-div__box">
      <div className="models-div__box__img">
        <img src={CarImg1} alt="car_img" />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{vehicle.brand} {vehicle.model}</p>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>${vehicle.pricePerDay}</h4>
              <p>per day</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details">
            <span>
              <IconCar /> &nbsp; {vehicle.vehicleType}
            </span>
            <span style={{ textAlign: "right" }}>
              {vehicle.available ? "Available" : "Not Available"}
            </span>
            <span>
              <IconCar /> &nbsp; {vehicle.transmissionType}
            </span>
            <span style={{ textAlign: "right" }}>
              {vehicle.fuelType} &nbsp; <IconCar />
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
