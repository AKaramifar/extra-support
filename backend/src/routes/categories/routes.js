import express from "express";
import {
  getCategories,
  createCategory,
  // getCategory,
  // updateCategory,
  // deleteCategory,
} from "./controllers";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
// router.get("/:CategoryId", getCategory);
// router.put("/", updateCategory);
// router.delete("/", deleteCategory);

export default router;
