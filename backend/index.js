import express from "express";
import db from "./db.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

// app middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
db();

// blog routes
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port:${PORT}`);
});
