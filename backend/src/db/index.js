import mongoose from "mongoose";

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
};

export default async function connectToDb() {
  const { DB_CONNECTION_URL, ENV } = process.env;
  try {
    await mongoose.connect(DB_CONNECTION_URL, mongooseOptions);
    console.log(`Connecting to ${ENV} DB`);
  } catch (e) {
    console.log(e, "Error connecting to db");
  }
}

export async function closeDbConnection() {
  await mongoose.connection.close();
}
