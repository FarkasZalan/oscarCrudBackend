import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// Environment Variables
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;

// Connect to DB
export const connectDB = mongoose.connect(('mongodb://${dbHost}:${dbPort}/${dbName}'))
    .then(res => {
        if (res) {
            console.log("Connected to DB");
        }
    }).catch(err => {
        console.log(err);
    })