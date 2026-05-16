import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/authRoute.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", router);


app.get("/", (req, res) => res.send("API Running"));

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));