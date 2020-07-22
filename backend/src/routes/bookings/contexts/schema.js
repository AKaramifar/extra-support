import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    studentId: String,
    studentName: String,
    tel: String,
    email: String,
    volunteerId: String,
    sessionId: String,
    date: Date,
    time: String,
    active: Boolean,
    canceledById: String,
    location: String,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const BookingModel = model("booking", bookingSchema);

export default BookingModel;
