import { useState } from "react";
import axios from "axios";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-3">
            <div className="container">
              <h1>Create Time Slot</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="startTime">Start Time:</label>
                <input
                  type="time"
                  id="startTime"
                />
                <label htmlFor="endTime">End Time:</label>
                <input
                  type="time"
                  id="endTime"
                />
                <input type="submit" />
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="container">
              <h1>Available Time Slots</h1>
              <form>
                <h5>10:00 - 11:00</h5>
                <button type="submit">Book</button>
              </form>
            </div>
          </div>
          <div className="col-lg-3">
            <h1>Book Time Slot</h1>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" />
              <p>10:00</p>
              <button type="submit">Book</button>
            </form>
          </div>
          <div className="col-lg-3">
            <h1>Booked Appointments</h1>
            <ul>
              <li>Apointment One</li>
              <li>Apointment Two</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
