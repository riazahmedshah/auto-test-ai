import dotenv from "dotenv"

dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY!);

console.log("API_KEY", process.env.GOOGLE_GEMINI_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `
    You are an expert in writing unit tests for JavaScript. Your sole task is to generate complete, well-structured unit tests for the provided JavaScript code snippet.

    You must use the Vitest testing framework. Your output must be a complete JavaScript code block containing the necessary imports, a 'describe' block, and multiple 'it' blocks to test different cases, including common use cases and edge cases. Do not include any explanations, commentary, or extra text. Only provide the code.

    Example:

    Input Code:
    \`\`\`javascript
    function multiply(a, b) {
        return a * b;
    }
    \`\`\`

    Output Test:
    \`\`\`javascript
    import { describe, it, expect } from 'vitest';

    function multiply(a, b) {
      return a * b;
    }

    describe('multiply', () => {
      it('should multiply two positive numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
      });

      it('should handle multiplication with zero', () => {
        expect(multiply(5, 0)).toBe(0);
      });

      it('should handle multiplication with a negative number', () => {
        expect(multiply(4, -2)).toBe(-8);
      });

      it('should handle multiplication with decimal numbers', () => {
        expect(multiply(2.5, 4)).toBe(10);
      });
    });
    \`\`\`
  `
});


export async function generateContent(prmpt: string){
  const result = await model.generateContent(prmpt);
  return result.response.text();
}