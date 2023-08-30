import express from 'express';
import connectDB from './config/db.js';
import service from  './services/servicesBook.js';
import servicesPublisher from './services/servicesPublisher.js';
import servicesUser from './services/servicesUser.js';
import bodyParser from "body-parser";
import cors from 'cors';


const port = 5000;

connectDB(); //Spajanje na MongoDB

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/test', (req, res) => {
    res.send('API is running...');
});

app.use('/api/books', service);
app.use('/api/publisher', servicesPublisher);
app.use('/api/user', servicesUser);


app.listen(port, () => console.log(`Server running on port ${port}`));