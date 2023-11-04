// Import the express in typescript file
import express from 'express';
import { indexRoute } from './route';
import { createTaskPage} from './route/createTask'
import  OpenAI from "openai";
import { date } from './views/component/date';
require('dotenv').config();
import { writeFileSync } from 'fs';

const ics = require ('ics');


function formatICS(input:String): String {
    // const parts = input.split(/\s(?!END:|\d{8}T\d{6})/);
    // return parts.join('\n');
    for (var part of input){
        
    }
}
// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
app.use(express.static('public'))


// Handling '/' Request
app.get('/', (req, res) => {
    res.send(indexRoute);
});

const openai = new OpenAI({
    apiKey: process.env.GPTKEY,
});

let Task = {
    Task_Description: ' ',
    Start_Date: ' ' ,
    End_Date: ' ',
    Max_Time_Per_Day: ' ' , 
    // Preferences: ' ',
 };

const event = {
    start: [2018, 5, 30, 6, 30],
    duration: { hours: 6, minutes: 30 },
    title: 'Bolder Boulder',
    description: 'Annual 10-kilometer run in Boulder, Colorado',
    location: 'Folsom Field, University of Colorado (finish line)',
    url: 'http://www.bolderboulder.com/',
    geo: [],
    categories: [],
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: { name: 'Admin', email: '' },
    attendees: []
};



Task.Task_Description = "I have to orginaze a soccer game for the neighborhood kids";
Task.Start_Date = "11/4/2023";
Task.End_Date = "11/14/2023";
Task.Max_Time_Per_Day = "3"


app.get ('/openai', async (req, res) => {
    const completion = openai.chat.completions.create({
        messages:[{
        role: "system", 
        content: "you are now renissanceGPT, a helpful AI scheduling assistant. Your job is to take tasks and break them down into subgoals taking the user's start date, end date,max time they are willing to work on it in a day, and task description into account and curating a schedule that will help them complete their task. keep in mind that the human brain can only focus for 1.5 hours on a given task effecitly. leave time for breaks if they have to do multiple tasks in a day. include newline characters. write a proposed schedule in this format:\nstart of Day: \nSubgoal: \nAdvice: \n{start time} - {end time} \n{other subgoals if time allows} \nend of day: \nthis is the task: " +  "\nTask description: "+Task.Task_Description + "\nTask StartDate: " + Task.Start_Date + "\nTask EndDate:" + Task.End_Date + "\nMask Time Per Day"+ Task.Max_Time_Per_Day,
        }],
        model:"gpt-4",
    });
});
app.get ('/we', async (req, res) => {
    const completion = openai.chat.completions.create({
        messages:[{
        role: "system", 
        content: "you are now renissanceGPT, a helpful AI scheduling assistant. Your job is to take tasks and break them down into subgoals taking the user's start date, end date,max time they are willing to work on it in a day, and task description into account and curating a schedule that will help them complete their task. keep in mind that the human brain can only focus for 1.5 hours on a given task effecitly. leave time for breaks if they have to do multiple tasks in a day. include newline characters. write a proposed schedule in this format:\nstart of Day: \nSubgoal: \nAdvice: \n{start time} - {end time} \n{other subgoals if time allows} \nend of day: \nthis is the task: " +  "\nTask description: "+Task.Task_Description + "\nTask StartDate: " + Task.Start_Date + "\nTask EndDate:" + Task.End_Date + "\nMask Time Per Day"+ Task.Max_Time_Per_Day,
        }],
        model:"gpt-4",
    });

    const new_completion = await openai.chat.completions.create({
        messages:[{
            role: "system", 
            content: (await completion).choices[0].message.content + "\nin ICS format, rewrite the informtaion",
        }],
            model:"gpt-4",
    });

    // const completionString : String = (await new_completion).choices[0].message.content!;
    const icsContent = formatICS((await new_completion).choices[0].message.content!);
    console.log(icsContent);
    res.send("\n"+icsContent+"\n");
    
});
app.get('/create-task',(req,res)=>{
    res.send(createTaskPage)
})
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});