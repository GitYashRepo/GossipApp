import dotenv from "dotenv";
dotenv.config();
import express from "express"
const app = express();
const PORT = process.env.PORT || 5001;
import { connectDB } from "./lib/db.js";
import indexRoutes from "./routes/index.route.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

app.use(express.json());
app.use("/", indexRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, ()=>{
    console.log("Server is running on PORT: "+PORT);
    connectDB();
})
