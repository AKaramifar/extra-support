import express from "express";
import {
  getAvailabilities,
  getSessions,
  createSession,
  getSessionByVolunteerId,
  // updateTutorial,
  // deleteTutorial,
} from "./controllers";
const router = express.Router();
router.get("/", getSessions);
router.get("/getAvailabilities", getAvailabilities);
router.post("/", createSession);
router.get("/:volunteerId", getSessionByVolunteerId);
// router.put("/", updateTutorial);
// router.delete("/", deleteTutorial);
export default router;
