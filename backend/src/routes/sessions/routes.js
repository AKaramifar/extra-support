import express from "express";
import {
  getAvailabilities,
  getSessions,
  // createTutorial,
  // getTutorial,
  // updateTutorial,
  // deleteTutorial,
} from "./controllers";
const router = express.Router();
router.get("/", getSessions);
router.get("/getAvailabilities", getAvailabilities);
// router.post("/", createTutorial);
// router.get("/:TutorialId", getTutorial);
// router.put("/", updateTutorial);
// router.delete("/", deleteTutorial);
export default router;
