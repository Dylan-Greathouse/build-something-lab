import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import quotess from './controllers/quotes';
const app = express();

app.use(express.json());

app.use('/api/v1/quotes', quotess);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
