import { useEffect, useState } from 'react';
import './App.css';
import useDebaunce from './hooks/useDebaunce';

const fetchPOSTOptions = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
};

const fetchDELETEOptions = {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json',
    },
};

const api = 'http://localhost:5001';

interface IDecks {
    createdAt: string;
    title: string;
    updatedAt: string;
    count: number;
    __v: number;
    _id: string;
}

function App() {
    const [deckText, setDeckText] = useState<string>('');
    const [deckCount, setDeckCount] = useState<number | string>(0);
    const [decks, setDecks] = useState<IDecks[]>([]);

    // const { debauncedValue } = useDebaunce(deckText, 300);
    // console.log(debauncedValue);

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
                        <li key={item._id}>
                            <div>
                                <button>Edit</button>
                                <button
                                    onClick={() => handleDeleteItem(item._id)}
                                >
                                    X
                                </button>
                            </div>
                            <div>
                                <span style={{ marginRight: '10px' }}>
                                    {item.title}
                                </span>
                                <span>{item.count}</span>
                            </div>
                        </li>
                    );
                })}
            </ul>
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
        </div>
    );
}

export default App;
