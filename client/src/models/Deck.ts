import { IfetchOption } from './apiFetch';

export interface IDecks {
    createdAt: string;
    title: string;
    updatedAt: string;
    count: number;
    __v: number;
    _id: string;
}

export interface IClassFormType {
    type: string;
    deckText: string;
    API_URL: string;
    fetchOptions: IfetchOption;
    handleSubmit: () => Promise<any>;
}

export interface IDeckItemProps {
    item: IDecks;
    setDecks: React.Dispatch<React.SetStateAction<IDecks[]>>;
}

export interface IDeckFormProps {
    setDecks?: React.Dispatch<React.SetStateAction<IDecks[]>>;
    setDeck?: React.Dispatch<React.SetStateAction<IDecks | null>>;
    setDeckText: React.Dispatch<React.SetStateAction<string>>;
    formType: IClassFormType;
    deckText: string;
}
