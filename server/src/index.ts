import express, { Request, Response } from 'express';
import { calculatePrimes } from './app';
import morgan from "morgan"

const app = express();
const port = 3001;

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req: Request, res: Response) => {
    const limit = Number(req.query.limit || 1000000 ); // default 1.000.000
    const data = calculatePrimes(limit);
    res.json({ data });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
