import { useEffect, useState } from "react";
import axios from "axios";

function Available() {
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/getTimeSlots")
            .then((response) => setTimeSlots(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleBookTimeSlot = (timeSlotId) => {
       
    };

    return (
        <>
            <div className="col-lg-3">
                <div className="container">
                    <h1>Available Time Slots</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots.map((timeSlot) => (
                                <tr key={timeSlot.id}>
                                    <td>{timeSlot.startTime}</td>
                                    <td>{timeSlot.endTime}</td>
                                    <td>
                                        <button onClick={() => handleBookTimeSlot(timeSlot.id)}>
                                            Book
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Available;
