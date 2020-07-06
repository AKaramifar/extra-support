import express from "express";
import {
  getUser,
  // getUsers,
  // updateUser,
  // deleteUser,
} from "./controllers";

const router = express.Router();

router.get("/:userId", getUser);
// router.get("/", getUsers);
// router.put("/", updateUser);
// router.delete("/", deleteUser);

export default router;
