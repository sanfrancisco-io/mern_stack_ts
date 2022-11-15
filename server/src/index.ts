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

app.get('/decks/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const deck = await Deck.findById(id);
        if (deck) {
            return res.status(200).json(deck);
        }
        res.status(404).json({
            message: 'Deck not found',
        });
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
});

app.get('/decks', async (req: Request, res: Response) => {
    try {
        const allDecks = await Deck.find({});
        if (allDecks) {
            return res.status(200).json(allDecks);
        }

        res.status(404).json({
            message: 'Decks not found',
        });
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
});

app.post('/decks', async (req: Request, res: Response) => {
    try {
        const deck = new Deck({
            title: req.body.title,
            count: req.body.count,
        });

        const createdDeck = await deck.save();
        res.json(createdDeck);
    } catch (err) {
        res.status(400).json({
            message: 'Something went wrong',
            err,
        });
    }
});

app.delete('/decks/:id', async (req: Request, res: Response) => {
    try {
        const deckId = req.params.id;
        const deck = await Deck.findByIdAndDelete(deckId);

        if (deck) {
            return res.status(200).json({
                Deleted: true,
                ...deck,
            });
        }

        res.status(404).json({
            Deleted: false,
            message: 'Item not found',
        });
    } catch (err) {
        res.status(404).json({ message: 'Something went wrong', err });
    }
});

app.patch('/decks/:id', async (req: Request, res: Response) => {
    try {
        const deckId = req.params.id;
        const { title, count } = req.body;

        const updatedDeck = await Deck.findByIdAndUpdate(
            { _id: deckId },
            {
                title,
                $inc: { count },
            }
        );
        if (updatedDeck) {
            return res.status(200).json({
                Updated: true,
                ...updatedDeck,
            });
        }

        res.status(404).json({
            Updated: false,
            message: 'Item not found',
        });
    } catch (err) {
        res.status(404).json({ message: 'Something went wrong', err });
    }
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
