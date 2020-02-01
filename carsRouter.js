const express = require('express');
const db = require('./data/db-config');
const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
            res.status(200);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to retrieve cars.'
            })
        })
})

module.exports = router;