import express from 'express';
import connectDB from './config/db.js';
import bookRoutes from  './services/bookServices.js';
import bodyParser from "body-parser";

const port = 5000;

connectDB(); //Spajanje na MongoDB

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/books', bookRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));