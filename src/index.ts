import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routes/users';
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);
const io = new Server();

//app.use('/api/users', usersRouter);

const PORT = 5000;

app.get('/', (requst: Request, response: Response) => {
    response.send('Hello World');
});

io.on('connection', (socket) => {
    console.log("a user connected");
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})