import React, { useState } from 'react';
import { IDeckFormProps } from '../models/Deck';
import { API_URL, fetchPOSTOptions } from '../utils/apiUtils';

const DeckForm = ({ setDecks }: IDeckFormProps) => {
    const [deckText, setDeckText] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const response = await fetch(`${API_URL}/decks`, {
                ...fetchPOSTOptions,
                body: JSON.stringify({
                    title: deckText,
                }),
            });
            const deck = await response.json();
            setDecks((prev) => [...prev, deck]);
            setDeckText('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='deck-title'>Deck title :</label>
            <input
                id='deck-title'
                value={deckText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDeckText(e.target.value)
                }
            />
            <button>Create deck</button>
        </form>
    );
};

export default DeckForm;
