import { API_URL } from '../utils/apiUtils';

export const useFetch = async (id?: string): Promise<any> => {
    const response: Response = await fetch(`${API_URL}/decks/${id ? id : ''}`);
    const json = await response.json();

    return json;
};
