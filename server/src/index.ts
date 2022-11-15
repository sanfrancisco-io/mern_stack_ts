import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Deck from './models/Deck';

dotenv.config();
const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

app.get('/decks', async (req: Request, res: Response) => {
    try {
        const allDecks = await Deck.find({});
        res.status(200).json(allDecks);
    } catch (err) {
        console.log(err);
    }
});

app.post('/decks', async (req: Request, res: Response) => {
    const deck = new Deck({
        title: req.body.title,
    });
    const createdDeck = await deck.save();
    res.json(createdDeck);
});

mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => {
        app.listen(PORT);
        console.log(`connectiong to mongodb and listening on ${PORT}`);
    })
    .catch((err) => {
        console.log(err);
    });
