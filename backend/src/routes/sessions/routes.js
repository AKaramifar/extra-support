import express from "express";
import {
  getAvailabilities,
  getSessions,
  createSession,
  getSessionByVolunteerId,
  updateSession,
  // deleteTutorial,
} from "./controllers";
const router = express.Router();
router.get("/", getSessions);
router.get("/getAvailabilities", getAvailabilities);
router.post("/", createSession);
router.get("/:volunteerId", getSessionByVolunteerId);
router.put("/:sessionId", updateSession);
// router.delete("/", deleteTutorial);
export default router;
