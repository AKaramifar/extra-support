import { Schema, model } from "mongoose";

const sessionSchema = new Schema(
  {
    volunteerId: String,
    categoryId: String,
    title: String,
    description: String,
    requirements: String,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const SessionModel = model("session", sessionSchema);

export default SessionModel;
