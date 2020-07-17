import express from "express";
import {
  getAvailabilities,
  createAvailability,
  updateAvailability,
  deleteAvailability
} from "./controllers";

const router = express.Router();
router.get("/:volunteerId?", getAvailabilities);
router.post("/", createAvailability);
router.put("/", updateAvailability);
router.delete("/:_id", deleteAvailability);

export default router;
