import express from "express"
import cors from "cors"
import { AiRouter } from "./routes/ai.routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/ai', AiRouter);