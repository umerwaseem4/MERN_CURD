import express from "express";
import db from "./db.js";
import blogRoutes from "./routes/blogRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// app middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
db();

// blog routes
app.get("/", (req, res) => {
  res.send("Hello go back to the route");
});
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port:${PORT}`);
});
