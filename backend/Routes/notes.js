const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    object = {
        a: 'Alexboy',
        no: 24
    }
    res.json(object);
});

module.exports = router;