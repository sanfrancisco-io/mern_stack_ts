import React, { useEffect, useState } from 'react';
import { IDecks } from '../models/Deck';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFech';

const Deck: React.FC = () => {
    const [deck, setDeck] = useState<IDecks | []>([]);
    let { id } = useParams();
    console.log(deck);

    useEffect(() => {
        useFetch(id)
            .then((res: IDecks) => {
                setDeck(res);
            })
            .catch((err: Promise<void>) => {
                console.log(err);
            });
    }, [id]);

    return <div>Deck</div>;
};

export default Deck;
