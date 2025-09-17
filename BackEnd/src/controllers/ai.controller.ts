import { Request, Response } from "express"
import { generateContent } from "../services/ai.service";

export const getReview = async (req:Request, res:Response) => {
  const code = req.body.code;

  if(!code){
    return res.status(400).send("Prompt is required");
  }

  const response = await generateContent(code);
  res.send(response);
}