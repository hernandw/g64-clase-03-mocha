import express from 'express';
import routes from './router/router.js'
const app = express();

const PORT = process.env.PORT | 3000;

app.use('/', routes)

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))