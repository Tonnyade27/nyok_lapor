require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');



const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const promMid = require('express-prometheus-middleware');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const app = express();
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
app.use(cors());
// Setup logging with Morgan
app.use(morgan('dev'));

// Setup Prometheus monitoring
app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
}));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

const PORT = process.env.PORT;

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.get(`/test`,  (req, res) => {
  
    res.send('Oke');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
