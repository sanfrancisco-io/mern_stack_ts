import { useEffect, useState } from 'react';
import DeckForm from './components/DeckForm';
import DeckItem from './components/DeckItem';
import { IDecks } from './models/Deck';

import './styles/App.css';
import { useFetch } from './hooks/useFech';
import { API_URL, fetchPOSTOptions } from './utils/apiUtils';
import { FormType } from './utils/FormType';

function App() {
    const [decks, setDecks] = useState<IDecks[]>([]);
    const [deckText, setDeckText] = useState<string>('');

    const createFormType = new FormType(
        'Create',
        deckText,
        `${API_URL}/decks`,
        fetchPOSTOptions
    );

    useEffect(() => {
        useFetch()
            .then((res: IDecks[]) => {
                setDecks(res);
            })
            .catch((err) => {
                console.log(err);
            });
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
            <DeckForm
                formType={createFormType}
                deckText={deckText}
                setDeckText={setDeckText}
                setDecks={setDecks}
            />
        </div>
    );
}

export default App;
