// Import the express in typescript file
import express from 'express';
import { indexRoute } from './route/index';
import { createTaskPage } from './route/createTask';
import { dateRoute } from './route/date';
import { taskinfoRoute } from './route/taskinfo';

import  OpenAI from "openai";
import { date } from './views/component/date';
require('dotenv').config();


// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
app.use(express.static('public'))


// Handling '/' Request
app.get(['/','/index'], (req, res) => {
    res.send(indexRoute);
});

        const openai = new OpenAI({
            apiKey: process.env.GPTKEY,
        });

app.get ('/openai', async (req, res) => {
    const completion = openai.chat.completions.create({
        messages:[{role: "system", content: "You are a helpful scedualing assistant"}],
        model:"gpt-4",
    });
    res.send("\n"+(await completion).choices[0].message.content+"\n");
});
app.get ('/create-task', async (req, res) => {
    res.send(createTaskPage);
}); 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});