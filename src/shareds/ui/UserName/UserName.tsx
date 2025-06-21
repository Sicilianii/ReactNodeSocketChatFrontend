import './_UserName.scss';
import type {FC, PropsWithChildren} from "react";

export const UserName: FC<PropsWithChildren> = ({children}) => (<span className={'user-name'}>{ children || 'Unknown' }</span>)
