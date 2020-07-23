import express from "express";
import {
  getBookings,
  getBookingsByVolunteerId,
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingsByStudentId,
  cancelVolunteerBookings,
  cancelStudentBookings,
} from "./controllers";

const router = express.Router();
router.get("/:availabilityId?", getBookings);
router.post("/", createBooking);
router.put("/", updateBooking);
router.put("/volunteer/cancel/:bookingId", cancelVolunteerBookings);
router.put("/student/cancel/:bookingId", cancelStudentBookings);
router.delete("/:_id", deleteBooking);
router.get("/volunteer/:volunteerId", getBookingsByVolunteerId);
router.get("/student/:studentId", getBookingsByStudentId);

export default router;
