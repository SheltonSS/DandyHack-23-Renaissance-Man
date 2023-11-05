// Import the express in typescript file
import express from 'express';
import { indexRoute } from './route';
import { createTaskPage} from './route/createTask'
import  OpenAI from "openai";
require('dotenv').config();
import { writeFileSync } from 'fs';
var stream = require('stream');


import { createEvent } from 'ics';
import { Console } from 'console';
import {downloadElement} from './route/downloadfile'
var bodyParser = require('body-parser');

// Initialize the express engine
const app: express.Application = express();
// Take a port 3000 for running server.
const port: number = 3000;
app.use(express.static('public'));
app.use(express.static('public/assets/img'));

app.use(bodyParser.urlencoded({ extended: true }));

// Handling '/' Request
app.get(['/','/index'], (req, res) => {
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
};

type EventData = {
    uid: string;
    summary: string;
    description: string;
    start: string; // Format: 'YYYYMMDDTHHmmssZ'
    end: string;   // Format: 'YYYYMMDDTHHmmssZ'
    timestamp: string; // Format: 'YYYYMMDDTHHmmssZ'
    location?: string;
};


//create the ICS File
function createICS(events: EventData[]): string {
  // iCalendar file header
  let icsFileContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TEAM:FUH//Renissance Man//EN\n`;

  for (const event of events) {
    // Begin Event
    icsFileContent += `BEGIN:VEVENT\n`;

    icsFileContent += `UID:${event.uid}\n`;
    icsFileContent += `DTSTAMP:${event.timestamp}\n`;
    icsFileContent += `DTSTART:${event.start}\n`;
    icsFileContent += `DTEND:${event.end}\n`;
    icsFileContent += `SUMMARY:${event.summary}\n`;
    icsFileContent += `DESCRIPTION:${event.description}\n`;
    
    // End Event
    icsFileContent += `END:VEVENT\n`;
  }

  // iCalendar file footer
  icsFileContent += `END:VCALENDAR`;

  return icsFileContent;
};

let events: EventData[] = [];

function formatICS(input:String): String {
    let temp_event: EventData = {
        uid: "string",
        summary: "string",
        description: "string",
        start: "string", // Format: 'YYYYMMDDTHHmmssZ'
        end: "string",   // Format: 'YYYYMMDDTHHmmssZ'
        timestamp: "string", // Format: 'YYYYMMDDTHHmmssZ'
    };
    
    
    const parts = input.split(/\s(?!END:|\d{8}T\d{6})/);
    // const information = parts.join('\n');
    let information = '';
    let i = 0;

    while (i < parts.length) {
        let line = parts[i];

        // Log the line for debugging purposes.
        console.log(i + ":" + line);
        //SUMMARY
        if (line.startsWith("SUMMARY:")) {
            
            let summary = line.substring(line.indexOf(':')+1);
            i++;
            
            while (i < parts.length && !parts[i].includes(':')) {
                summary = summary+ " " + parts[i];
                i++;
            }

            if((parts[i].includes(':') && parts[i].includes('.')) && ( parts[i].indexOf(':') > parts[i].indexOf('.')) ){
                summary = summary+ " " + parts[i].substring(0,parts[i].indexOf('.'));
                i++;
            }
            console.log(summary);


            
            temp_event.summary=summary;

            // We don't increment `i` here because the while loop already does it.
            
            information += "*SUMMARY*:" + summary + '\n';

        //DESCRIPTION
        } else if( line.startsWith("DESCRIPTION")) {
        //---
        
            let description = line.substring(line.indexOf(':')+1); 
            i++;

            
            while (i < parts.length && !parts[i].includes(':')) {
                description = description+ " " + parts[i];
                i++;
            }
            if((parts[i].includes(':') && parts[i].includes('.')) && ( parts[i].indexOf(':') > parts[i].indexOf('.')) ){
                description = description+ " " + parts[i].substring(0,parts[i].indexOf('.'));
                i++;
            }

            
            temp_event.description=description;


            // We don't increment `i` here because the while loop already does it.
            
            information += "*DESCRIPTION*:" + description + '\n';
            
        }else if (line.startsWith("DTSTART")) {
            let start = line.substring(line.indexOf(':')+1); 
            i++;

            
            while (i < parts.length && !parts[i].includes(':')) {
                start = start+ " " + parts[i];
                i++;
            }
            if((parts[i].includes(':') && parts[i].includes('.')) && ( parts[i].indexOf(':') > parts[i].indexOf('.')) ){
                start = start+ " " + parts[i].substring(0,parts[i].indexOf('.'));
                i++;
            }
            
            temp_event.start=start;


            // We don't increment `i` here because the while loop already does it.
            
            information += "*START*:" + start + '\n';
        }else if (line.startsWith("DTEND")) {
            
            // let substring: String = line.substring(line.indexOf(':'));
            let end = line.substring(line.indexOf(':')+1); 
            i++;

            
            while (i < parts.length && !parts[i].includes(':')) {
                end = end+ " " + parts[i];
                i++;
            }
            if((parts[i].includes(':') && parts[i].includes('.')) && ( parts[i].indexOf(':') > parts[i].indexOf('.')) ){
                end = end+ " " + parts[i].substring(0,parts[i].indexOf('.'));
                i++;
            }
            
            temp_event.end=end;

            //create an event
            if(temp_event.summary!="string"){
                events.push({
                    uid: i.toString(),
                    summary: temp_event.summary,
                    description: temp_event.description,
                    start: temp_event.start, // Format: 'YYYYMMDDTHHmmssZ'
                    end: temp_event.end,   // Format: 'YYYYMMDDTHHmmssZ'
                    timestamp: "20231105T090000", // Format: 'YYYYMMDDTHHmmssZ'
                });
            }

            // We don't increment `i` here because the while loop already does it.
            
            information += "*END*:" + end + '\n';
        } else if (line.startsWith("END:VEVENT")) {
        
        } else {
            // For lines that are not summary, just append them to information.
            // console.log(line);
            information += line + '\n';
            i++;
        }
    }
    return information.trim();
}

//example task
app.post('/create-task/process',async (req,res)=>{

    var taskName = req.body.taskname;
    Task.Task_Description = req.body.taskdescription;
    console.log()
    Task.Start_Date = req.body.datestart;
    Task.End_Date = req.body.deadline;
    Task.Max_Time_Per_Day = req.body.maxhours; 
  

    console.log("\n\n\n\n"+Task.Task_Description + "\n\n\n\n");
    const completion = openai.chat.completions.create({
        messages:[{
        role: "system", 
        content: "\n\nTask description: "+Task.Task_Description + "\nTask StartDate: " + Task.Start_Date + "\nDays until due:" + Task.End_Date + "\nMax Time Per Day"+ Task.Max_Time_Per_Day+"\nTake the role of a helpful AI scheduling assistant. Your job is to take tasks and break them down into subgoals taking the user's start date, end date,max time they are willing to work on it in a day, and task description into account and curating a schedule that will help them complete their task. keep in mind that the human brain can only focus for 1.5 hours on a given task effecitly. leave time for breaks if they have to do multiple tasks in a day. write a proposed schedule in in ICS format. minimize colen use, do not put any refrence to date or day in the description. ",
        }],
        model:"gpt-4",
    });

    //takes the prompt and gets the ICS thing but in one line with no ne wline characters. saves that to icsContent
    const icsContent = formatICS((await completion).choices[0].message.content!);
    // console.log(icsContent);
    //res.send("\n"+icsContent+"\n");
    var fileContents = Buffer.from(createICS(events));
    var readStream = new stream.PassThrough();
    readStream.end(fileContents);

    res.set('Content-disposition', 'attachment; filename=' + "task.ics");
    res.set({'Content-Type':'text/plain','Location': '/index'});
    readStream.pipe(res);
    

    
})




// Task.Task_Description = "I have to orginaze a soccer game for the neighborhood kids";
// Task.Start_Date = "11/4/2023";
// Task.End_Date = "11/14/2023";
// Task.Max_Time_Per_Day = "3"


app.get('/create-task',(req,res)=>{
    res.send(createTaskPage)
})




// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});