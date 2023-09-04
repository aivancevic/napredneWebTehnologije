import express from 'express';
import connectDB from './config/db.js';
import servicesBook from  './services/servicesBook.js';
import servicesPublisher from './services/servicesPublisher.js';
import servicesUser from './services/servicesUser.js';
import bodyParser from "body-parser";
import cors from 'cors';


const port = 5000;

connectDB(); //Spajanje na MongoDB

const app = express();

// app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/books', servicesBook);
app.use('/api/publisher', servicesPublisher);
app.use('/api/user', servicesUser);

app.listen(port, () => console.log(`Server running on port ${port}`));