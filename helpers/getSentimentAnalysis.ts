import { NextRequest } from "next/server";
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
global.EventSource = require('eventsource');
import { client } from "@gradio/client";

export const getSentimentAnalysis = async (request: any) => {
    try {
        const { feedbackArray } = await request.json();
        
        const app = await client("swapnilkapale/sentiment-analysis", {});
        const result = await app.predict("/predict",feedbackArray );

        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
}
