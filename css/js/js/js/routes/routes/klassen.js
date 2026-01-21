const express = require('express');
const router = express.Router();

let klassen = [];

router.get('/', (req, res) => {
    res.json(klassen);
});

router.post('/add', (req, res) => {
    const { naam } = req.body;
    klassen.push(naam);
    res.json({ success: true, klassen });
});

module.exports = router;
