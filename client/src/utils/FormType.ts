import { IfetchOption } from '../models/apiFetch';
import { IDecks } from '../models/Deck';

export default class FormType {
    type;
    deckText;
    API_URL;
    fetchOptions;

    constructor(
        _title: string,
        _deckText: string,
        _API_URL: string,
        _fetchOptions: IfetchOption
    ) {
        this.type = _title;
        this.deckText = _deckText;
        this.API_URL = _API_URL;
        this.fetchOptions = _fetchOptions;
    }

    async handleSubmit(): Promise<IDecks[] | IDecks> {
        const response = await fetch(this.API_URL, {
            ...this.fetchOptions,
            body: JSON.stringify({
                title: this.deckText,
            }),
        });
        const data = response.json();
        return data;
    }
}
