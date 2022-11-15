import { IDecks } from '../models/Deck';
import { API_URL } from '../utils/apiUtils';

export const useFetch = async (id?: string) => {
    const response: Response = await fetch(`${API_URL}/decks/${id ? id : ''}`);
    const json = await response.json();

    return json;
};
