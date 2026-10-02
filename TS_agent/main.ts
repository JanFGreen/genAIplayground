import { streamText, tool, stepCountIs } from "ai";
import { z } from "zod";
import { tavily } from "@tavily/core";
import { google } from "@ai-sdk/google";

// Initialize Tavily search client (requires TAVILY_API_KEY environment variable)
const tvly = tavily();
// Define web search tool
const searchTool = tool({
    description: "Search the web for up-to-date information",
    inputSchema: z.object({
        query: z.string().describe("The search query to look up on the web"),
    }),
    execute: async ({ query }) => {
        const results = await tvly.search(query, {
            max_results: 3,
            topic: "news"
        });
        return results;
    },
});
// Run the Gemini model with tool access
const askAQuestion = async (prompt: string) => {
    const result = streamText({
        model: google("gemini-3.6-flash"), // Requires GOOGLE_GENERATIVE_AI_API_KEY
        prompt,
        tools: {
            search: searchTool,
        },
        stopWhen: stepCountIs(5), // Allows the model to search and then synthesize the answer
    });

    for await (const textPart of result.textStream) {
        process.stdout.write(textPart);
    }
}

askAQuestion("What are the latest AI news stories from today?");



