import { useEffect, useState } from 'react';
import { IDecks } from '../models/Deck';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFech';
import { API_URL, fetchUPDATEOptions } from '../utils/apiUtils';
import DeckForm from '../components/DeckForm';
import FormType from '../utils/FormType';

const Deck = () => {
    const [deck, setDeck] = useState<IDecks | null>(null);
    const [deckText, setDeckText] = useState<string>('');
    let { id } = useParams();

    const updateFormType = new FormType(
        'Update',
        deckText,
        `${API_URL}/decks/${id}`,
        fetchUPDATEOptions
    );

    useEffect(() => {
        useFetch(id)
            .then((res: IDecks) => {
                setDeck(res);
            })
            .catch((err: Promise<void>) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div>
            <div className='updatedtitle'>Title : {deck?.title}</div>
            <DeckForm
                setDeck={setDeck}
                formType={updateFormType}
                deckText={deckText}
                setDeckText={setDeckText}
            />
        </div>
    );
};

export default Deck;
