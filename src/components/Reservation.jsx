import { useEffect, useState } from "react";
import { IconInfoCircleFilled } from "@tabler/icons-react";

function Reservation({ onCustomerDetails }) {
  const [modal, setModal] = useState(false); //  class - active-modal

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const customerData = {
        name, lastName, phone, age, email, address, city, zipcode
    };
    onCustomerDetails(customerData);
    const doneMsg = document.querySelector(".booking-done");
    if (doneMsg) {
      doneMsg.style.display = "flex";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <>
      <div className="container">
        <div className="book-content">
          <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
            {/* title */}
            <div className="booking-modal__title">
              <h2>Complete Reservation</h2>
            </div>
            {/* message */}
            <div className="booking-modal__message">
              <h4>
                <IconInfoCircleFilled /> Upon completing this reservation enquiry,
                you will receive:
              </h4>
              <p>
                Your rental voucher to produce on arrival at the rental desk and a
                toll-free customer support number.
              </p>
            </div>

            {/* personal info */}
            <div className="booking-modal__person-info">
              <h4>Personal Information</h4>
              <form className="info-form">
                <div className="info-form__2col">
                  <span>
                    <label>
                      First Name <b>*</b>
                    </label>
                    <input
                      value={name}
                      onChange={handleName}
                      type="text"
                      placeholder="Enter your first name"
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Last Name <b>*</b>
                    </label>
                    <input
                      value={lastName}
                      onChange={handleLastName}
                      type="text"
                      placeholder="Enter your last name"
                    ></input>
                    <p className="error-modal ">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Phone Number <b>*</b>
                    </label>
                    <input
                      value={phone}
                      onChange={handlePhone}
                      type="tel"
                      placeholder="Enter your phone number"
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Age <b>*</b>
                    </label>
                    <input
                      value={age}
                      onChange={handleAge}
                      type="number"
                      placeholder="18"
                    ></input>
                    <p className="error-modal ">This field is required.</p>
                  </span>
                </div>

                <div className="info-form__1col">
                  <span>
                    <label>
                      Email <b>*</b>
                    </label>
                    <input
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      placeholder="Enter your email address"
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Address <b>*</b>
                    </label>
                    <input
                      value={address}
                      onChange={handleAddress}
                      type="text"
                      placeholder="Enter your street address"
                    ></input>
                    <p className="error-modal ">This field is required.</p>
                  </span>
                </div>

                <div className="info-form__2col">
                  <span>
                    <label>
                      City <b>*</b>
                    </label>
                    <input
                      value={city}
                      onChange={handleCity}
                      type="text"
                      placeholder="Enter your city"
                    ></input>
                    <p className="error-modal">This field is required.</p>
                  </span>

                  <span>
                    <label>
                      Zip Code <b>*</b>
                    </label>
                    <input
                      value={zipcode}
                      onChange={handleZip}
                      type="text"
                      placeholder="Enter your zip code"
                    ></input>
                    <p className="error-modal ">This field is required.</p>
                  </span>
                </div>

                <span className="info-form__checkbox">
                  <input type="checkbox"></input>
                  <p>Please send me latest news and updates</p>
                </span>

                <div className="reserve-button">
                  <button onClick={confirmBooking}>Reserve Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
