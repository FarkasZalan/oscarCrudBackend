import express from "express";
import { nomineeRoutes } from "./routes/nomineeRoutes";
import mongoose from "mongoose";
import { connectDB } from "./dbConnections";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/nominees", nomineeRoutes);

// Connect to MongoDB
connectDB.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
});