import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! con router');
})

router.get('/country', (req, res) => {
    const pais = {
        id: 1,
        country: 'Colombia',
        capital: 'Bogota',
        population: 40000000,
        year: 2021,
        days: 17
    }
    res.json(pais)
})

export default router