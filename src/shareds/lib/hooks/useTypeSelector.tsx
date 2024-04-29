import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "../../../app/store/store";

export const useTypedSelector:TypedUseSelectorHook<RootReducer> = useSelector