//node server.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/data', async (req, res) => {
    try {
        const apiResponse = await fetch('https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'app_id': '56a5055c',
                'app_key': '11f4d86d605a01d17e894bbc49e4f0fa',
                'ResourceVersion': 'v4',
            }
        });

        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});