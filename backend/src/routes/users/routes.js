import express from "express";
import {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "./controllers";

const router = express.Router();

router.get("/:userId", getUser);
router.get("/", getUsers);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
