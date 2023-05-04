import mongoose, { Mongoose } from "mongoose";

const url = "mongodb://127.0.0.1/db_api";

export const connectToDataBase = async (): Promise<
  Mongoose | undefined | void
> => {
  try {
    return await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

connectToDataBase();
