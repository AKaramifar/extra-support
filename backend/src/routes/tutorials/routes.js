import express from "express";
import {
  getAvailabilities,
  getTutorials,
  // createTutorial,
  // getTutorial,
  // updateTutorial,
  // deleteTutorial,
} from "./controllers";

const router = express.Router();

router.get("/", getTutorials);
router.get("/getAvailabilities", getAvailabilities);

// router.post("/", createTutorial);
// router.get("/:TutorialId", getTutorial);
// router.put("/", updateTutorial);
// router.delete("/", deleteTutorial);

export default router;
