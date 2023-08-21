import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Data from './models/dataModel.js'; // Adjust the path as needed

async function populateDatabase() {
  try {
    const jsonData = fs.readFileSync(new URL('data/jsondata.json', import.meta.url), 'utf-8');
    const data = JSON.parse(jsonData);
    
    await mongoose.connect('mongodb://127.0.0.1:27017/dashboardDB');

    await Data.insertMany(data);

    // Get the estimated document count
    const documentCount = await Data.estimatedDocumentCount();

    console.log('Data inserted successfully');
    console.log('Inserted Document Count:', documentCount); 
  } catch (error) {
    console.error('Error populating data:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
}

// Call the population function
populateDatabase();
