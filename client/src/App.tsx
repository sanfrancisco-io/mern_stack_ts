import React, { useEffect, useState } from 'react';
import DeckForm from './components/DeckForm';
import DeckItem from './components/DeckItem';
import { IDecks } from './models/Deck';
import { api, fetchDELETEOptions, fetchPOSTOptions } from './utils/apiUtils';

import './App.css';

function App() {
    const [deckText, setDeckText] = useState<string>('');
    const [deckCount, setDeckCount] = useState<number | string>(0);
    const [decks, setDecks] = useState<IDecks[]>([]);

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

    useEffect(() => {
        const fetchData = async () => {
            const decks = await fetch(`${api}/decks`);
            const json: IDecks[] = await decks.json();
            setDecks(json);
        };

        fetchData();
    }, []);

    const handleDeleteItem = async (id: string) => {
        try {
            await fetch(`${api}/decks/${id}`, {
                ...fetchDELETEOptions,
            });

            setDecks((prev) => prev.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='app'>
            <ul className='decks'>
                {decks.map((item: IDecks) => {
                    return (
                        <DeckItem
                            item={item}
                            handleDeleteItem={handleDeleteItem}
                        />
                    );
                })}
            </ul>
            <DeckForm
                deckText={deckText}
                handleSubmit={handleSubmit}
                setDeckCount={setDeckCount}
                setDeckText={setDeckText}
                deckCount={deckCount}
            />
        </div>
    );
}

export default App;
