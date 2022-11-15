import React, { useEffect, useState } from 'react';
import DeckForm from './components/DeckForm';
import DeckItem from './components/DeckItem';
import { IDecks } from './models/Deck';
import { API_URL } from './utils/apiUtils';

import './styles/App.css';

function App() {
    const [decks, setDecks] = useState<IDecks[]>([]);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const decks: Response = await fetch(`${API_URL}/decks`);
            const json: IDecks[] = await decks.json();
            setDecks(json);
        };

        fetchData();
    }, []);

    return (
        <div className='app'>
            <ul className='decks'>
                {decks.map((item: IDecks) => {
                    return (
                        <DeckItem
                            key={item._id}
                            setDecks={setDecks}
                            item={item}
                        />
                    );
                })}
            </ul>
            <DeckForm setDecks={setDecks} />
        </div>
    );
}

export default App;
