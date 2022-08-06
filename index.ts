import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// config dotenv
dotenv.config();

// create Express app
const app: Express = express();
const port: number = Number(process.env.PORT || 3000);

// Define the routes

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the home page');
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World');
});

//! execute app and listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err: Error) => {
    console.log(err);
});
