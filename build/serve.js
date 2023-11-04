"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the express in typescript file
const express_1 = __importDefault(require("express"));
const route_1 = require("./route");
// Initialize the express engine
const app = (0, express_1.default)();
// Take a port 3000 for running server.
const port = 3000;
// Handling '/' Request
app.get('/', (req, res) => {
    res.send(route_1.indexRoute);
});
app.post('/click', (req, res) => {
    res.send("textoo");
});
// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
