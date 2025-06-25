import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middlware/rateLimiter.js";
import cors from "cors";
//same as require
dotenv.config(); // req to use .env vars

const app = express();

//middleware
app.use(express.json()); // to parse the json body of req



//middleware function to do something before processing the request
//example: auth check / rate limiting (429)
app.use((req, res, next) => {
  console.log(`New ${req.method} request recieved on ${req.url}`);
  next(); // this means do whatever you were gonna do
});


//rateLimiting middleware
app.use(cors({
  origin:"http://localhost:5173",
}));
app.use(rateLimiter);




app.use("/api/notes", notesRoutes);

// better to use .then so after db connection we start listening
connectDB().then(() => {
  app.listen(process.env.PORT, () => console.log("App started on 5001"));
});
