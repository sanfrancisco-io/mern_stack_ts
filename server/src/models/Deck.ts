import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

interface IDeck {
    title: string;
}

const DeckSchema = new Schema<IDeck>({
    title: String,
});

const DeckModel = mongoose.model<IDeck>('Deck', DeckSchema);

export default DeckModel;
