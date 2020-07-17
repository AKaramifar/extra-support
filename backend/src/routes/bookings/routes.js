import express from "express";
import {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} from "./controllers";

const router = express.Router();
router.get("/:availabilityId?", getBookings);
router.post("/", createBooking);
router.put("/", updateBooking);
router.delete("/:_id", deleteBooking);

export default router;
