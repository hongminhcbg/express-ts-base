import express from 'express';
import { Request, Response } from 'express';
const app = express();

app.use(express.json());

// Routes
app.use('/v1/api/health', (req: Request, res: Response) => {
  console.log('Health check');
  console.log(req);
  res.json({ message: 'OK' });
});

export default app;
