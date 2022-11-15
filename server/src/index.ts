import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import { getDeck, getDecks } from './controllers/getDeck';
import { createDeck } from './controllers/createDeck';
import { deleteDeck } from './controllers/deleteDeck';
import { updateDeck } from './controllers/updateDeck';

//init app and env file
dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get('/decks', getDecks);
app.get('/decks/:id', getDeck);
app.post('/decks', createDeck);
app.delete('/decks/:id', deleteDeck);
app.patch('/decks/:id', updateDeck);

//connect to mongo and listen some port
mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => {
        app.listen(process.env.PORT);
        console.log(
            `connectiong to mongodb and listening on ${process.env.PORT}`
        );
    })
    .catch((err) => {
        console.log(err);
    });
