import {useEffect, useState} from "react";

export default function useFetchPOST<T>(url: string, options?: RequestInit) {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: Response = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError((error as Error).message);
            }
        };
        fetchData();
    }, []);

    return { response, error };
}