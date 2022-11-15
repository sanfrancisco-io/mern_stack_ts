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
    setDecks: React.Dispatch<React.SetStateAction<IDecks[]>>;
}

export interface IDeckFormProps {
    setDecks: React.Dispatch<React.SetStateAction<IDecks[]>>;
}
