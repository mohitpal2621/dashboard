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

router.get('/data/filter', async (req, res) => {
  try {
    const query = req.query;
    console.log(query);

    const filteredData = await Data.find(query);
    res.json(filteredData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // Get data by sector
// router.get('/data/sector/:sector', async (req, res) => {
//   try {
//     const { sector } = req.params;
//     const dataBySector = await Data.find({ sector: sector });
//     res.json(dataBySector);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get data by region
// router.get('/data/region/:region', async (req, res) => {
//   try {
//     const { region } = req.params;
//     const dataByRegion = await Data.find({ region: region });
//     res.json(dataByRegion);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get data by source
// router.get('/data/source/:source', async (req, res) => {
//   try {
//     const { source } = req.params;
//     const dataBySource = await Data.find({ source: source });
//     res.json(dataBySource);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// // Get data by topic
// router.get('/data/topic/:topic', async (req, res) => {
//   try {
//     const { topic } = req.params;
//     const dataByTopic = await Data.find({ topic: sector });
//     res.json(dataByTopic);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get data by start year
// router.get('/data/start-year/:year', async (req, res) => {
//   try {
//     const { year } = req.params;
//     const filteredData = await Data.find({ start_year: year });
//     res.json(filteredData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get data by end year
// router.get('/data/end-year/:year', async (req, res) => {
//   try {
//     const { year } = req.params;
//     const filteredData = await Data.find({ end_year: year });
//     res.json(filteredData);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

export default router;
