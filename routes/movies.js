const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    };
});

router.put('/:id', async (req, res) => {
    try {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updateMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
});

router.delete('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;