import mongoose from "mongoose";

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export default async function connectToDb() {
  const { db, env } = process.env;
  try {
    console.log(`Connecting to ${env} DB`);
    await mongoose.connect(db.connection, mongooseOptions);
  } catch (e) {
    console.log(e, "Error connecting to db");
  }
}

export async function closeDbConnection() {
  await mongoose.connection.close();
}
