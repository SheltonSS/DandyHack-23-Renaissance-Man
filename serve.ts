// Import the express in typescript file
import express from 'express';
import { indexRoute } from './route';



// Initialize the express engine
const app: express.Application = express();
 
// Take a port 3000 for running server.
const port: number = 3000;
app.use(express.static('public'))


// Handling '/' Request
app.get('/', (req, res) => {
    res.send(indexRoute);
});
app.post('/click',(req,res)=>{
    res.send("textoo");
});
 
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});