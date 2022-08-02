import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { initializeDatabase } from './db';
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Brame full stack app');
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});

initializeDatabase();
