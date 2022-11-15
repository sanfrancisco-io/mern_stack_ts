import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Deck from './models/Deck';

dotenv.config();
const app = express();
const PORT = 5001;

app.use(express.json());

app.post('/decks', async (req: Request, res: Response) => {
    const deck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await deck.save();
    res.json(createdDeck);
});

mongoose
    .connect(
        'mongodb+srv://admin:admin@cardapp.ebmd4f9.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(PORT);
        console.log(`connectiong to mongodb and listening on ${PORT}`);
    })
    .catch((err) => {
        console.log(err);
    });
