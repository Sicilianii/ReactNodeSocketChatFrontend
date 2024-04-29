import {useLoaderData} from "react-router-dom";

export function useTypedLoaderData<T> (): T {
    const data = useLoaderData()
    return data as T
}