import Deck from '../models/Deck';
import { Request, Response } from 'express';

export const updateDeck = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!id) {
        return res.status(404).json({
            message: 'Cannot find doc',
        });
    }

    try {
        const updatedDeck = await Deck.findByIdAndUpdate(id, {
            title,
        });
        res.status(200).json(updatedDeck);
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
};
