import { useState } from "react";
import axios from "axios";
import "./App.css";
import Create from "./Create";

function App() {
  const [showCreate, setShowCreate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString();
  };

  const handleCreateClick = () => {
    setShowCreate(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <button onClick={handleCreateClick}>Create Slot</button>
          <button>Book Available Slots</button>
          <button>View Available Slots</button>
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
    </>
  );
}

export default App;
