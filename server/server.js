const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/media", require("./routes/projectRoutes"));
app.listen(5000, () => console.log("Server running on port 5000"));