import React from "react";
import { IconMapPinFilled } from "@tabler/icons-react";


function ReservationInfo(props) {

  return(
    <div className="booking-modal__car-info">
    <div className="dates-div">
      <div className="booking-modal__car-info__dates">
        <h5>Location & Date</h5>
        <span>
          <IconMapPinFilled />
          <div>
            <h6>Pick-Up Date & Time</h6>
            <p>
              {props.pickTime} /{" "}
              
            </p>
          </div>
        </span>
      </div>

      <div className="booking-modal__car-info__dates">
        <span>
          <IconMapPinFilled />
          <div>
            <h6>Drop-Off Date & Time</h6>
            <p>
              {props.dropTime} /{" "}
              
            </p>
          </div>
        </span>
      </div>

      <div className="booking-modal__car-info__dates">
        <span>
          <IconMapPinFilled />
          <div>
            <h6>Pick-Up Location</h6>
            <p>{props.pickUp}</p>
          </div>
        </span>
      </div>

      <div className="booking-modal__car-info__dates">
        <span>
          <IconMapPinFilled />
          <div>
            <h6>Drop-Off Location</h6>
            <p>{props.dropOff}</p>
          </div>
        </span>
      </div>
    </div>
  </div>
  );
}

export default ReservationInfo;
