import Deck from '../models/Deck';
import { Request, Response } from 'express';

export const deleteDeck = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        return res.status(404).json({
            message: 'Cannot find doc',
        });
    }

    try {
        const deletedDeck = await Deck.findByIdAndDelete(id);
        res.status(200).json({ Deleted: true, deletedDeck });
    } catch (err) {
        res.status(404).json({
            message: 'Something went wrong',
            err,
        });
    }
};
