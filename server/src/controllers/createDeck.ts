import Deck from '../models/Deck';
import { Request, Response } from 'express';

export const createDeck = async (req: Request, res: Response) => {
    const { title } = req.body;

    try {
        const newDeck = await Deck.create({
            title,
        });
        const createdDeck = await newDeck.save();
        res.status(200).json(createdDeck);
    } catch (err) {
        res.status(400).json({
            message: 'Something went wrong',
            err,
        });
    }
};
