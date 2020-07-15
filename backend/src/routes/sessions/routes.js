import express from "express";
import {
  getAvailabilities,
  getSessions,
  createSession,
  // getTutorial,
  // updateTutorial,
  // deleteTutorial,
} from "./controllers";
const router = express.Router();
router.get("/", getSessions);
router.get("/getAvailabilities", getAvailabilities);
router.post("/", createSession);
// router.get("/:TutorialId", getTutorial);
// router.put("/", updateTutorial);
// router.delete("/", deleteTutorial);
export default router;
