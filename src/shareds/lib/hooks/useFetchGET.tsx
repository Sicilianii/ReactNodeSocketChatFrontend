import {useEffect, useState} from "react";

export default function useFetchGET<T>(url: string) {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res: Response = await fetch(url);
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