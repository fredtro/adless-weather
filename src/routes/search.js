// routes/search.js
import express from 'express';
import fs from 'fs';
const path = require('path');

const router = express.Router();

router.get('/', function(req, res, next) {
    const data = fs.readFileSync(path.join(__dirname, './data.json'));

    res.json(JSON.parse(data));
});
export default router;