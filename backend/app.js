// app.js

const express = require("express");
const cookieParser = require("cookie-parser");

const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const errorMiddleware = require("./middleware/error");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Route Registration
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);

// Error Handling Middleware (should come last)
app.use(errorMiddleware);

module.exports = app;
