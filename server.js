require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://3.143.111.4',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error(error);
});

// Importar rutas
const moviesRouter = require('./routes/movies');

// Usar rutas
app.use('/movies', moviesRouter);

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${process.env.PORT}`)
});