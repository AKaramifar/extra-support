import { Schema, model } from "mongoose";

const availabilitySchema = new Schema(
  {
    sessionId: String,
    volunteerId: String,
    location: String,
    day: String,
    startDate: Date,
    endDate: Date,
    startTime: String,
    endTime: String,
    repeat: String
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const AvailabilityModel = model("availability", availabilitySchema);

export default AvailabilityModel;
