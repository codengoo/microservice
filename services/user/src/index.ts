import express, { Request, Response } from 'express';
import { getUser } from './app';
import morgan from "morgan"

const app = express();
const port = 3030;

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', (req: Request, res: Response) => {
    try {
        const data = getUser();
        res.json({ data });
    } catch (error) {
        res.status(500);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
