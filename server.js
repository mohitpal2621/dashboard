import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dataRoutes from './routes/dataRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/', dataRoutes);

main().catch(err => console.log(err));

async function main() {
  try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/dashboardDB');
    console.log('Connected to my database');  
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
