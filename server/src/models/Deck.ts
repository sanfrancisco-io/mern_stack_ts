import mongoose from 'mongoose';

const Schema = mongoose.Schema;

interface IDeck {
    title: string;
}

const DeckSchema = new Schema<IDeck>(
    {
        title: String,
    },
    {
        timestamps: true,
    }
);

const DeckModel = mongoose.model<IDeck>('Deck', DeckSchema);

export default DeckModel;
