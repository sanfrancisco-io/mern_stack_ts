import React, { useEffect, useState } from 'react';
import { IDecks } from '../models/Deck';
import { api } from '../utils/apiUtils';
import { useParams } from 'react-router-dom';

const Deck: React.FC = () => {
    const [deck, setDeck] = useState<null | object>(null);
    let { id } = useParams();

    console.log(deck);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const response: Response = await fetch(`${api}/decks/${id}`);
            const json: IDecks = await response.json();
            setDeck(json);
        };

        fetchData();
    }, [id]);

    return <div>Deck</div>;
};

export default Deck;
