import express from "express";
import {
  getAvailabilities,
  createAvailability,
  updateAvailability,
  deleteAvailability
} from "./controllers";

const router = express.Router();
router.get("/", getAvailabilities);
router.post("/", createAvailability);
router.put("/", updateAvailability);
router.delete("/", deleteAvailability);

export default router;
