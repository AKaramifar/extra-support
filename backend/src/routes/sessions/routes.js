import express from "express";
import {
  getAvailabilities,
  getSessions,
  getSession,
  createSession,
  deleteSession,
  updateSession,
} from "./controllers";

const router = express.Router();

router.get("/:volunteerId?", getSessions);
router.get("/session/:sessionId", getSession);
router.get("/getAvailabilities", getAvailabilities);
router.post("/", createSession);
router.delete("/:sessionId", deleteSession);
router.put("/:sessionId", updateSession);

export default router;
