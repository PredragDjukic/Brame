import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { myDataSource } from './db';
import { getAll } from './services/userService';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', async (req: Request, res: Response) => {
  res.send('Brame full stack app');

  getAll();
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});


myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization:", err)
    })