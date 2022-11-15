import React, { useState } from 'react';
import { IDeckFormProps } from '../models/Deck';
import { api, fetchPOSTOptions } from '../utils/apiUtils';

const DeckForm = ({ setDecks }: IDeckFormProps) => {
    const [deckText, setDeckText] = useState<string>('');
    const [deckCount, setDeckCount] = useState<number | string>(0);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const response = await fetch(`${api}/decks`, {
                ...fetchPOSTOptions,
                body: JSON.stringify({
                    title: deckText,
                    count: deckCount,
                }),
            });
            const deck = await response.json();
            setDecks((prev) => [...prev, deck]);
            setDeckText('');
            setDeckCount(0);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='deck-title'>Deck title</label>
            <input
                id='deck-title'
                value={deckText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDeckText(e.target.value)
                }
            />
            <label htmlFor='deck-count'>Deck count</label>
            <input
                id='deck-count'
                value={deckCount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDeckCount(e.target.value)
                }
            />
            <button>Create deck</button>
        </form>
    );
};

export default DeckForm;
