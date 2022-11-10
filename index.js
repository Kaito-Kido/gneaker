import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

import shoes from "./data/shoes.json" assert { type: "json" };
const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/client/build")));
dotenv.config();
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

let data = Array(10).fill(0);

app.get("/api/", (req, res) => {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/api/shoes", (req, res) => {
  try {
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/api/update", (req, res) => {
  try {
    data = req.body;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
