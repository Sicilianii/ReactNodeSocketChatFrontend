import {useRouteError} from "react-router-dom";

type ErrorResponse = {
    data: any;
    status: number;
    statusText: string;
    message?: string;
};

const errorCheck = (error: any): error is ErrorResponse => {
    return "data" in error && "status" in error && "statusText" in error;
};

export function useTypedRouteError() {
    const error : any = useRouteError()
    if (errorCheck(error)) return error as ErrorResponse
}