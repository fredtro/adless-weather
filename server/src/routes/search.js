// routes/search.js
import express from 'express';
import { getWeatherData } from '../waetherapi';

const router = express.Router();
router.get('/', async function(req, res, next) {
    try {
        const weatherData = await getWeatherData(req.query);

        return res.json(weatherData);
    } catch (e) {
        //to make it simple for now
        return res.status(400).json(e);
    }
});
export default router;
