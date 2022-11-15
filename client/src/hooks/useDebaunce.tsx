import { useEffect, useState } from 'react';

export default function useDebaunce(text: string, time: number) {
    const [debauncedValue, setDebauncedValue] = useState<string>('');

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebauncedValue(text);
        }, time);

        return () => {
            clearTimeout(timeId);
        };
    }, [text]);

    return {
        debauncedValue,
    };
}
