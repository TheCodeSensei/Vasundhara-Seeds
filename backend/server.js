const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv')
const cors = require('cors');
const {Farmer, Activity, Variety} = require('./models/schemas')


dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json());

//connect to MongoDB
connectDB();

// API to add a farmer
app.post('/farmers', async (req, res) => {
    try {
      const { farmer_name } = req.body;
      if (!farmer_name) return res.status(400).json({ message: 'Farmer name is required' });
  
      const newFarmer = new Farmer({ farmer_name });
      await newFarmer.save();
  
      res.status(201).json({ message: 'Farmer added successfully', farmer: newFarmer });
    } catch (error) {
      res.status(500).json({ message: 'Error adding farmer', error });
    }
  });

  // API to add a Variety
app.post('/variety', async (req, res) => {
  try {
    const { variety_name } = req.body;
    if (!variety_name) return res.status(400).json({ message: 'Variety name is required' });

    const newVariety = new Variety({ variety_name });
    await newVariety.save();

    res.status(201).json({ message: 'Variety added successfully', variety: newVariety });
  } catch (error) {
    res.status(500).json({ message: 'Error adding Variety', error });
  }
});

  // API to add a activity
app.post('/activity', async (req, res) => {
  try {
    const { activity_name, rate } = req.body;
    if (!activity_name || rate===undefined || rate===null) return res.status(400).json({ message: 'invalid input data' });

    const newActivity = new Activity({ activity_name, rate });
    await newActivity.save();

    res.status(201).json({ message: 'Activity added successfully', Activity: newActivity });
  } catch (error) {
    res.status(500).json({ message: 'Error adding activity', error });
  }
});

  // API to get farmer
app.get('/farmers', async (req, res) => {
  try {
      const farmers = await Farmer.find();
      res.status(200).json(farmers);

  } catch (error) {
    res.status(500).json({ message: 'Error fetching farmer', error });
  }
});

  // API to get activities
  app.get('/activity', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
  
    } catch (error) {
      res.status(500).json({ message: 'Error fetching acitvity', error });
    }
  });

    // API to get varieties
    app.get('/variety', async (req, res) => {
      try {
          const varieties = await Variety.find();
          res.status(200).json(varieties);
    
      } catch (error) {
        res.status(500).json({ message: 'Error fetching Variety', error });
      }
    });
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));