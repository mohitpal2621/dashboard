import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

const Data = mongoose.model('Data', dataSchema);

// Populate the database with data (modify as needed)
//const initData = [
  // Your data objects go here
//];

// try {
//   await Data.insertMany(initData);
//   console.log('Data inserted successfully');
// } catch (error) {
//   console.error('Error inserting data: ', error);
// }

export default Data;
