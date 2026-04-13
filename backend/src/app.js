import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { PORT } from "./config/env.js";

import authRoutes from "./routes/authRoutes.js";  // ✅ ADD THIS
import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// ROUTES MUST BE ABOVE ERROR HANDLER
app.use("/api/auth", authRoutes);   // ✅ ENABLE IT
app.use("/api/tasks", taskRoutes);

// Error Handler (MUST be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// 🔹 1. EC2 pe connect ho (tu already ho)
// ssh -i your-key.pem ec2-user@your-ip

// - MOST COMMON ISSUE → Security Group
// AWS me ja:
// 👉 EC2 → Security Groups → Inbound Rules
// Ensure ye ports open hain:
// Type
// Port
// HTTP
// 80
// Custom TCP
// 3000
// Custom TCP
// 5000
// Custom TCP
// 5173
// 👉 Source: 0.0.0.0/0


// 🔹 2. System update + Node install
// (To-Do List Manager) 
// 2️⃣ Node 20 install
// sudo dnf update -y
// curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
// sudo yum install -y nodejs
// sudo dnf install -y git

// 3️⃣ Check version
// node -v
// 👉 output hona chahiye:
// v20.x.x ✅


// 🔹 3. GitHub repo clone kar
// git clone https://github.com/kaustubhgharat/Student_Record_Management.git
// cd Student_Record_Management

// ⚙️ BACKEND SETUP
// 🔹 4. Backend install + run
// cd backend
// npm install

// 🔹 5. Backend run kar
// node server.js

// 🔹 6. Frontend install ( terminal 2 me frontend run kro)
// cd frontend
// npm install
// npm run dev / npm start
// npm run dev -- --host(Task_Manager)

// 🔹 8. .env fix kar (VERY IMPORTANT)
// Nano .env
// Frontend me:
// VITE_BACKEND_BASE_URL=http://<EC2_PUBLIC_IP>:5000


// 🌍 FINAL ACCESS
// Browser me open:
// http://<EC2_PUBLIC_IP>:3000

