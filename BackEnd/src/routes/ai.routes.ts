import {Router} from "express";
import { getReview } from "../controllers/ai.controller";

export const AiRouter = Router();

AiRouter.post("/get-review", getReview);