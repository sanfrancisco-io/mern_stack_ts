import React from 'react';
import { IDeckItemProps, IDecks } from '../models/Deck';

const DeckItem = ({ item, handleDeleteItem }: IDeckItemProps) => {
    return (
        <li key={item._id}>
            <div>
                <button>Edit</button>
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
