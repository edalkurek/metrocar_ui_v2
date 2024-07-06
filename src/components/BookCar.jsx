import { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function BookCar() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  // booking car
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axios.get('/locations') // API endpoint URL'nizi girin
      .then(response => {
        setLocations(response.data); // Gelen veriyi locations state'ine ata
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);


  const openAvailableVehicle = (e) => {
    e.preventDefault();
    if(pickUp && dropOff && pickTime && dropTime) { // Tüm alanların doldurulduğunu kontrol edin
      navigate('/availableVehicle', {
        state: { pickUp, dropOff, pickTime, dropTime }  // Tarih ve zaman bilgilerini `state` üzerinden gönder
      });
    } else {
      const errorMsg = document.querySelector(".error-message");
      errorMsg.style.display = "flex"; // Hata mesajını göster
      // Hata mesajını göster
    }
  };

  // taking value of booking inputs


  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };



  return (
    <>
      <section id="booking-section" className="book-section">
        <div onClick={() => ""}></div>
        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>
              <p className="error-message">All fields required! <IconX width={20} height={20} /></p>
              <form className="box-form">
                <div className="box-form__car-type">
                  <label><IconMapPinFilled className="input-icon" /> &nbsp; Pick-up <b>*</b></label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>{location.name}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__car-type">
                  <label><IconMapPinFilled className="input-icon" /> &nbsp; Drop-off <b>*</b></label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select drop off location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>{location.name}</option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="datetime-local"
                    min={today}
                    max={dropTime || "9999-12-31"}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="datetime-local"
                    min={pickTime || today}
                  ></input>
                </div>

                <button onClick={openAvailableVehicle} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}
    </>
  );
}

export default BookCar;
