import { useEffect} from "react";

export default function useFocusInput(elem : HTMLInputElement | null, status: boolean) {
    useEffect(() => {
        if (status && elem !== null) { elem?.focus() } else { elem?.blur() }
    }, [status]);
}