import React from 'react';
import { IDeckFormProps } from '../models/Deck';

const DeckForm = ({
    deckText,
    handleSubmit,
    setDeckText,
    setDeckCount,
    deckCount,
}: IDeckFormProps) => {
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
