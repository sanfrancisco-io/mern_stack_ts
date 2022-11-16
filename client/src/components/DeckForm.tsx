import React from 'react';
import { IDeckFormProps } from '../models/Deck';

const DeckForm = ({
    setDeck,
    setDecks,
    deckText,
    setDeckText,
    formType,
}: IDeckFormProps) => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await formType.handleSubmit();
            if (setDecks) setDecks((prev) => [...prev, data]);
            if (setDeck) setDeck(data);
            setDeckText('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='deck-title'>{formType.type} title :</label>
            <input
                id='deck-title'
                value={deckText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDeckText(e.target.value)
                }
            />
            <button>{formType.type}</button>
        </form>
    );
};

export default DeckForm;
