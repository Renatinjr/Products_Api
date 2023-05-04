import mongoose from "mongoose";

const url = "mongodb://127.0.0.1/db_api";

export const client = mongoose.connect(url);
