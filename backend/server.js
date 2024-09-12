const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

// MongoDB Connection function
const Connection = async () => {
  const URL = 'mongodb+srv://ankurmalkani143:Ankur12345@cluster0.fp2mu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB connected successfully');
  } catch (error) {
    console.log("Error while connecting to DB", error);
  }
};

// Call the MongoDB connection function
Connection();

// Define the Mongoose schema and model for images
const ImageSchema = new mongoose.Schema({ imageUrl: String });
const Image = mongoose.model('Image', ImageSchema);

// Middleware to parse JSON
app.use(express.json());

// API to handle image upload
app.post('/upload', upload.single('image'), (req, res) => {
  const newImage = new Image({ imageUrl: req.file.path });
  newImage.save()

    .then(() => res.status(201).json({ message: 'Image uploaded successfully!' }))
    .catch(err => res.status(500).json({ error: err }));
});

// API to fetch images
app.get('/images', (req, res) => {
  Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(500).json({ error: err }));
});

// Start the server
app.listen(5000, () => console.log('Server started on port 5000'));
