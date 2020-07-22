import { Schema, model } from "mongoose";

const availabilitySchema = new Schema(
  {
    sessionId: String,
    volunteerId: String,
    location: String,
    date: Date,
    startTime: String,
    endTime: String,
    repeat: String,
    active: Boolean,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const AvailabilityModel = model("availability", availabilitySchema);

export default AvailabilityModel;
