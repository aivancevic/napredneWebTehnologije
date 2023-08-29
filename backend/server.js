import express from 'express';
import connectDB from './config/db.js';
import service from  './services/servicesBook.js';
import bodyParser from "body-parser";
import servicesPublisher from './services/servicesPublisher.js';
const port = 5000;

connectDB(); //Spajanje na MongoDB

const app = express();

app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.send('API is running...');
});

app.use('/api/books', service);
app.use('/api/publisher', servicesPublisher);

app.listen(port, () => console.log(`Server running on port ${port}`));