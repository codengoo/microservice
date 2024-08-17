import express, { Request, Response } from 'express';
import { calculatePrimes } from './app';
import morgan from "morgan"
import axios from 'axios';

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("tiny"));

app.get('/', async (req: Request, res: Response) => {
    const limit = Number(req.query.limit || 1000000 ); // default 1.000.000
    const data = calculatePrimes(limit);
    const userResponse = await axios.get("http://user-service.default.svc.cluster.local:3030");
    const user = userResponse.data || {};
    res.json({ data, user });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
