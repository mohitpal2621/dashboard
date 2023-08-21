import express from 'express';
import { Router } from 'express';
import Data from '../models/dataModel.js';


const router = Router();

// Get all data
router.get('/data', async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
