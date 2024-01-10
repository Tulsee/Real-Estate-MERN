import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import UserRouter from "./routes/user.route.js";
import AuthRouter from "./routes/auth.route.js";
import ListingRouter from "./routes/listing.route.js";
import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/listing", ListingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || " Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
