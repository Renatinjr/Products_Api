import mongoose from "mongoose";
require("dotenv").config();

export const client = mongoose.connect(process.env.SERVER_URL ?? "");
