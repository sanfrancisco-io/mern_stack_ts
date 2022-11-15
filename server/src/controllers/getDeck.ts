import Deck from '../models/Deck';
import { Request, Response } from 'express';

export const getDecks = async (req: Request, res: Response) => {
    try {
        const decks = await Deck.find({});
        res.status(200).json(decks);
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
};

export const getDeck = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(404).json({
            message: 'Cannot find doc',
        });
    }
    try {
        const deck = await Deck.findById(id);
        res.status(200).json(deck);
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
};
