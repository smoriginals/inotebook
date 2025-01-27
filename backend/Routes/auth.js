const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    object = {
        a: 'Alex',
        no: 23
    }
    res.json(object);
});

module.exports = router;