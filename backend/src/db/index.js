import mongoose from "mongoose";
import config from "../config";
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

export default async function connectToDb() {
  const { db, env } = config;
  try {
    await mongoose.connect(db.connection, mongooseOptions);
    console.log(`Connecting to ${env} DB`);
  } catch (e) {
    console.log(e, "Error connecting to db");
  }
}

export async function closeDbConnection() {
  await mongoose.connection.close();
}
