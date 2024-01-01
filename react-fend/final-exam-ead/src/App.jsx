import { useState } from "react";
import axios from "axios";
import "./App.css";
import Create from "./Create";
import Available from "./Available"; // Import the Available component

function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [showAvailable, setShowAvailable] = useState(false); // Add state for showing Available component

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString();
  };

  const handleCreateClick = () => {
    setShowCreate(true);
  };

  const handleViewClick = () => {
    setShowAvailable(true); // Set showAvailable state to true when "View Available Slots" button is clicked
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <button onClick={handleCreateClick}>Create Slot</button>
          <button>Book Available Slots</button>
          <button onClick={handleViewClick}>View Available Slots</button> {/* Add onClick event handler for "View Available Slots" button */}
        </div>
        <div className="col-lg-6">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Slot</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:00 - 11:00</td>
                  <td>John Doe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showCreate && <Create />}
      {showAvailable && <Available />} {/* Render Available component when showAvailable state is true */}
    </>
  );
}

export default App;
