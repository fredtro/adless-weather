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
        return res.status(404).json({ code: '404', message: 'City not found. Please try another query.' });
    }
});
export default router;
