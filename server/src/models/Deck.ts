import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

interface IDeck {
    title: string;
    count: number;
}

const DeckSchema = new Schema<IDeck>(
    {
        title: String,
        count: Number,
    },
    {
        timestamps: true,
    }
);

const DeckModel = mongoose.model<IDeck>('Deck', DeckSchema);

export default DeckModel;
