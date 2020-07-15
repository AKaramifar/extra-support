import { Schema, model } from "mongoose";

const availabilitySchema = new Schema(
  {
    sessionId: String,
    location: String,
    day: String,
    timeSlots: Array,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const AvailabilityModel = model("availability", availabilitySchema);

export default AvailabilityModel;
