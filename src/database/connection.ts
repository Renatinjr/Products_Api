import mongoose from "mongoose";

const url = "mongodb://127.0.0.1/db_api";

export const connectToDataBase = async (): Promise<any> => {
  try {
    const res = await mongoose.connect(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

connectToDataBase();
