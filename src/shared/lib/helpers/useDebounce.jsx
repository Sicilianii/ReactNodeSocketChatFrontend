import {useEffect, useState} from 'react';

export default function useDebounce(value, delay) {
    const [currentDebounce, setCurrentDebounce] = useState(value);

    useEffect(() => {
        const handle = setTimeout(
            () => {
                setCurrentDebounce(value);
            },
            delay
        );

        return () => clearTimeout(handle);
    }, [value]);

    return currentDebounce;
}
