import express from 'express';
import mongoose from 'mongoose';
import appealRoutes from './routes/appealRoutes';

const app = express();
app.use(express.json());

// Подключение к MongoDB (в .env укажи MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Маршруты
app.use('/api/appeals', appealRoutes);

export default app;
