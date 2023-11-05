// Import the express in typescript file
import express from 'express';
import { indexRoute } from './route';
import { createTaskPage} from './route/createTask'
import {downloadElement} from './route/downloadfile'
import  OpenAI from "openai";
require('dotenv').config();
import { writeFileSync } from 'fs';

import { createEvent } from 'ics';
import { Console } from 'console';
var bodyParser = require('body-parser');

// Initialize the express engine
const app: express.Application = express();
// Take a port 3000 for running server.
const port: number = 3000;
app.use(express.static('public'));
app.use(express.static('public/assets/img'));

app.use(bodyParser.urlencoded({ extended: true }));

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


//create the ICS File function
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

            
            console.log("summary: " + summary);
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

            
            console.log("description: " + description);
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
            
            console.log("start: " + start);
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
            
            console.log("end: " + end);
            temp_event.end=end;

            //create an event
            events.push({
                uid: i.toString(),
                summary: temp_event.summary,
                description: temp_event.description,
                start: temp_event.start, // Format: 'YYYYMMDDTHHmmssZ'
                end: temp_event.end,   // Format: 'YYYYMMDDTHHmmssZ'
                timestamp: "20231104T090000", // Format: 'YYYYMMDDTHHmmssZ'
            });

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

// Function to create and download a file
function createAndDownloadFile(fileName: string, content: string): void {
    // Create a blob from the content
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  
    // Create an object URL for the blob
    const url = URL.createObjectURL(blob);
  
    // Create a new anchor element
    const downloadLink = document.createElement('a');
  
    // Set the href to the object URL
    downloadLink.href = url;
  
    // Set the download attribute with the file name
    downloadLink.download = fileName;
  
    // Append the link to the body (it does not need to be visible)
    document.body.appendChild(downloadLink);
  
    // Programmatically click the link to trigger the download
    downloadLink.click();
  
    // Remove the link from the document
    document.body.removeChild(downloadLink);
  
    // Release the object URL
    URL.revokeObjectURL(url);
  }
  
 app.get('/dsa', async (req, res) => {
    res.send(downloadElement(""))
    });
//example task
Task.Task_Description = "I have to orginaze a soccer game for the neighborhood kids";
Task.Start_Date = "11/6/2023";
Task.End_Date = "11/16/2023";
Task.Max_Time_Per_Day = "3"

app.get ('/we', async (req, res) => {
    const completion = openai.chat.completions.create({
        messages:[{
        role: "system", 
        content: "Take the role of a helpful AI scheduling assistant. Your job is to take tasks and break them down into subgoals taking the user's start date, end date,max time they are willing to work on it in a day, and task description into account and curating a schedule that will help them complete their task. keep in mind that the human brain can only focus for 1.5 hours on a given task effecitly. leave time for breaks if they have to do multiple tasks in a day. write a proposed schedule in in ICS format. minimize colen use, do not put any refrence to date or day in the description. " +  "\n\nTask description: "+Task.Task_Description + "\nTask StartDate: " + Task.Start_Date + "\nDays until due:" + Task.End_Date + "\nMax Time Per Day"+ Task.Max_Time_Per_Day,
        }],
        model:"gpt-4",
    });

    // const completionString : String = (await new_completion).choices[0].message.content!;
    const icsContent = formatICS((await completion).choices[0].message.content!);
    // console.log(icsContent);
    // res.send("\n"+icsContent+"\n");
    console.log("\n"+createICS(events));

     // Usage: create and download a file named 'sample.txt' with the text 'Hello, world!'
    createAndDownloadFile('sample.txt', 'Hello, world!');  

    // const blob = new Blob([createICS(events)], { type: 'text/plain' });
    // const blobUrl = window.URL.createObjectURL("blob");
  
    // const downloadLink = document.createElement('a');
    // downloadLink.href = blobUrl;
    // downloadLink.download = "task.ics";
    // res.download(blob);

    
});

app.get('/create-task',(req,res)=>{
    res.send(createTaskPage)
})

// app.get('/nous', function (req, res) { 
// });

app.post('/create-task/process',(req,res)=>{
    var taskName = req.body.taskname;
    var taskDescripion = req.body.taskdescripion;
    var dateStart = req.body.datestart;
    var dateDayDuration = req.body.datedayduration;
    var maxHours = req.body.maxhours; 
    console.log(req.body);
    setTimeout(function() {
        res.sendStatus(200);
    }, 5000);
})

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});