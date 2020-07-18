import passport from "passport";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import './routes/auth/passport'
dotenv.config();
import connectToDb from "./db";
import {
  users,
  categories,
  sessions,
  auth,
  availabilities,
  bookings,
} from "./routes";
export let server;
export async function startAPI() {
  const app = express()
    .use(cors())
    .use(express.json({ limit: "50mb", parameterLimit: 50000 }))
    .use(passport.initialize())
    .get("/", (reg, res) => res.sendStatus(200))
    .use("/auth", auth)
    .use("/users", users)
    .use("/categories", categories)
    .use("/sessions", sessions)
    .use("/availabilities", availabilities)
    .use("/bookings", bookings);
  server = app.listen(3001, () =>
    console.log(`Listening on ${server.address().port}`)
  );
  await connectToDb();
  return app;
}
startAPI();
