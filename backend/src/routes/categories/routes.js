import express from "express";
import {
  getCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "./controllers";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.get("/:categoryId", getCategoryById);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;
