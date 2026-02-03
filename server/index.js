import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { content } from "./content.js";

const app = express();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.get("/api/content", (_req, res) => {
  res.json(content);
});

const clientDist = path.resolve(__dirname, "../client/dist");
app.use(express.static(clientDist));

app.get("*", (_req, res) => {
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(port, () => {
  console.log(`CoverDesk server running on port ${port}`);
});
