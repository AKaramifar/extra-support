import express from "express";
import {
  getBookings,
  getBookingsByVolunteerId,
  createBooking,
  updateBooking,
  deleteBooking,
} from "./controllers";

const router = express.Router();
router.get("/:availabilityId?", getBookings);
router.get("/volunteer/:volunteerId", getBookingsByVolunteerId);
router.post("/", createBooking);
router.put("/", updateBooking);
router.delete("/:_id", deleteBooking);

export default router;
