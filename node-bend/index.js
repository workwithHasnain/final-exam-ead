const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const TimeSlotSchema = new mongoose.Schema({
    startTime: String,
    endTime: String,
});

const TimeSlotModel = mongoose.model("timeslots", TimeSlotSchema);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/finalexam");

app.get("/getTimeSlots", (req, res) => {
    TimeSlotModel.find()
        .then((timeSlots) => res.json(timeSlots))
        .catch((err) => res.json(err));
});

app.post("/addTimeSlot", (req, res) => {
    const { startTime, endTime } = req.body;
    const newTimeSlot = new TimeSlotModel({ startTime, endTime });
    newTimeSlot
        .save()
        .then(() => res.json({ message: "Time slot created successfully" }))
        .catch((err) => res.json(err));
});

app.listen(3001, () => {
    console.log("Server started");
});
