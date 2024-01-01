import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/getTimeSlots")
      .then((response) => setTimeSlots(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddTimeSlot = () => {
    const newTimeSlot = {
      startTime,
      endTime,
    };

    axios
      .post("http://localhost:3001/addTimeSlot", newTimeSlot)
      .then((response) => {
        console.log(response.data);
        setStartTime("");
        setEndTime("");
        setTimeSlots([...timeSlots, newTimeSlot]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <button onClick={handleAddTimeSlot}>Add Time Slot</button>
      </div>
    </>
  );
}

export default App;
