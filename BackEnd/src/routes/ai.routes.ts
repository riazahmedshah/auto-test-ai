import {Router} from "express";
import { getTests } from "../controllers/ai.controller";

export const AiRouter = Router();

AiRouter.post("/get-tests", getTests);