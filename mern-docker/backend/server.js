const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

  mongoose
    // .connect("mongodb://mongo:27017/mern-docker") 
    mongoose.connect("mongodb+srv://shaanruk0309:BhLkRU2bJjbZjIOb@rukshan.x9pwk.mongodb.net/mydatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.error("MongoDB connection failed, retrying in 5 seconds...", err);
    });
      const itemSchema=new mongoose.Schema({
        name:String,
      })
    


const Item = mongoose.model('Item', itemSchema);

// GET endpoint to fetch all items
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST endpoint to create a new item
app.post('/api/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
