import express, { Request, Response } from 'express';

import userRouter from './controllers/user';

const app = express();

app.use('/api/v1/user', userRouter)

export default app;