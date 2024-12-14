import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

// Connecting to the MongoDB Client
const url = process.env.MONGO_URL;
const client = new MongoClient(url);
await client.connect();  // Using 'await' here as it's top-level async operation

// App & Database
const dbName = process.env.DB_NAME;
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});

// Save a password
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult });
});

// Delete a password by id
app.delete('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult });
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});






//--------------------------------------------------------------------------------------------------------------------------

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// const app = express();
// dotenv.config();

// const port = process.env.PORT || 3000;  // Default port if not specified
// const mongo_url = process.env.MONGO_URL;

// if (!mongo_url) {
//   console.error("MongoDB connection string (MONGO_URL) is missing in .env file");
//   process.exit(1);  // Exit if the MongoDB URL is not set
// }

// console.log("Connecting to MongoDB at", mongo_url);  // Log the MongoDB URL for debugging

// mongoose
//   .connect(mongo_url)
//   .then(() => {
//     console.log("DB connected successfully.");
//     app.listen(port, () => {
//       console.log(`Server is running at http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log("DB connection failed:", error);
//   });
