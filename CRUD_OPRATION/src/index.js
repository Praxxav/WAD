const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const port = 3000;
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose.connect("mongodb+srv://pranavkulkarni33917:Pranav@cluster0.odko0c8.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  })
  .catch((err) => console.error("MongoDB connection error:", err));
