import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    availabilityId: String,
    studentId: String,
    time: String
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const BookingModel = model("booking", bookingSchema);

export default BookingModel;
