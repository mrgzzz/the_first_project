import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN || ['http://localhost:3000', 'https://your-frontend-domain.vercel.app'],
  credentials: true
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Hello from production backend!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

app.post('/api/echo', (req, res) => {
  res.json({ 
    received: req.body,
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend API is running',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    endpoints: ['/api/health', '/api/data', '/api/echo']
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`CORS enabled for: ${process.env.CORS_ORIGIN}`);
});