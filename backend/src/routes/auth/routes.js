import express from "express";
import passport from "passport";

import { login, register, volunteerLogin, volunteerRegister } from "./controllers";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/volunteer/register/:volunteerId", volunteerRegister);

// admin registration
router.get("/github-admin", passport.authenticate("githubStrategy"));
router.get(
  "/callback/application/github/admin",
  passport.authenticate("githubStrategy", {
    failureRedirect: "/admin/login",
    session: false,
  }),
  volunteerLogin
);

export default router;
