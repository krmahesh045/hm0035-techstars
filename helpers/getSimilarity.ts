import { NextRequest } from "next/server";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
global.EventSource = require('eventsource');
import { client } from "@gradio/client";

export const getSimilarity = async (request: any) => {
    try {
        const { studentsArray, mentorArray } = await request;
        const similarityApp = await getClient("swapnilkapale/similarity"); // Create a new client instance
        const result = await similarityApp.predict("/calculate_similarity", [studentsArray, mentorArray]);
        console.log(result);
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

// Function to create a new Gradio client instance
async function getClient(modelName: string) {
    const app = await client(modelName, {});
    return app;
}
