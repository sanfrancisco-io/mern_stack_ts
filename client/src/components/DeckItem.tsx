import { IDeckItemProps } from '../models/Deck';
import { API_URL, fetchDELETEOptions } from '../utils/apiUtils';
import { Link } from 'react-router-dom';

const DeckItem = ({ item, setDecks }: IDeckItemProps) => {
    const handleDeleteItem = async (id: string) => {
        try {
            await fetch(`${API_URL}/decks/${id}`, {
                ...fetchDELETEOptions,
            });

            setDecks((prev) => prev.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <li>
            <div>
                <Link to={`deck/${item._id}`}>Edit</Link>
                <button onClick={() => handleDeleteItem(item._id)}>X</button>
            </div>
            <div>
                <span style={{ marginRight: '10px' }}>{item.title}</span>
                <span>{item.count}</span>
            </div>
        </li>
    );
};

export default DeckItem;
