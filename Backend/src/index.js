import express from 'express';
import { connectDB } from './lib/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server running on port ${process.env.PORT || 5001}`);
});
