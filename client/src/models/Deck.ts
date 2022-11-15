export interface IDecks {
    createdAt: string;
    title: string;
    updatedAt: string;
    count: number;
    __v: number;
    _id: string;
}

export interface IDeckItemProps {
    item: IDecks;
    handleDeleteItem: (id: string) => Promise<void>;
}

export interface IDeckFormProps {
    deckText: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    setDeckText: (value: React.SetStateAction<string>) => void;
    setDeckCount: (value: React.SetStateAction<string | number>) => void;
    deckCount: string | number;
}
