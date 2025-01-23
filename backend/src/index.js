import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectBD } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import serviceRoutes from "./routes/service.route.js";
import formRoutes from "./routes/form.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "https://community-nu-five.vercel.app",
    credentials: true,
}));

// Add custom CORS headers middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://community-nu-five.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/forms", formRoutes);

// Database Connection
connectBD();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on PORT:" + PORT);
});
