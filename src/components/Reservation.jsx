import { useEffect, useState } from "react";
import { IconInfoCircleFilled } from "@tabler/icons-react";

function Reservation({ onCustomerDetails }) {
  const [modal, setModal] = useState(false); //  class - active-modal

  // modal infos
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [flightInfo, setFlightInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleBirthDate = (e) => {
    setBirthDate(e.target.value);
  };

  const handleIdCardNumber = (e) => {
    setIdCardNumber(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleFlightInfo = (e) => {
    setFlightInfo(e.target.value);
  };

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const customerData = {
        name, surname, email, phoneNumber, birthDate, idCardNumber, country, city, address, flightInfo, paymentMethod
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
              <h2>Booking Information</h2>
              <IconInfoCircleFilled onClick={() => setModal(!modal)} />
            </div>
            {/* form */}
            <form>
              <div className="info-form__2col">
                <span>
                  <label>
                    Name <b>*</b>
                  </label>
                  <input
                    value={name}
                    onChange={handleName}
                    type="text"
                    placeholder="Enter your name"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Surname <b>*</b>
                  </label>
                  <input
                    value={surname}
                    onChange={handleSurname}
                    type="text"
                    placeholder="Enter your surname"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    Email <b>*</b>
                  </label>
                  <input
                    value={email}
                    onChange={handleEmail}
                    type="text"
                    placeholder="Enter your email"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Phone Number <b>*</b>
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    type="text"
                    placeholder="Enter your phone number"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    Birth Date <b>*</b>
                  </label>
                  <input
                    value={birthDate}
                    onChange={handleBirthDate}
                    type="date"
                    placeholder="Enter your birth date"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    ID Card Number <b>*</b>
                  </label>
                  <input
                    value={idCardNumber}
                    onChange={handleIdCardNumber}
                    type="text"
                    placeholder="Enter your ID card number"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    Country <b>*</b>
                  </label>
                  <input
                    value={country}
                    onChange={handleCountry}
                    type="text"
                    placeholder="Enter your country"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>

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
              </div>

              <div className="info-form__2col">
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
                  <p className="error-modal">This field is required.</p>
                </span>

                <span>
                  <label>
                    Flight Info <b>*</b>
                  </label>
                  <input
                    value={flightInfo}
                    onChange={handleFlightInfo}
                    type="text"
                    placeholder="Enter your flight info"
                  ></input>
                  <p className="error-modal">This field is required.</p>
                </span>
              </div>

              <div className="info-form__2col">
                <span>
                  <label>
                    Payment Method <b>*</b>
                  </label>
                  <select value={paymentMethod} onChange={handlePaymentMethod}>
                    <option value="" disabled>Select a payment method</option>
                    <option value="CASH">Cash at Arrival</option>
                    <option value="CREDIT_CARD">Credit Card at Arrival</option>
                  </select>
                  <p className="error-modal">This field is required.</p>
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
    </>
  );
}

export default Reservation;
