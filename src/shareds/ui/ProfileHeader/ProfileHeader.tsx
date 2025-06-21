import type {FC, PropsWithChildren} from 'react';
import './_ProfileHeader.scss'

export const ProfileHeader: FC<PropsWithChildren> = ({children}) => (<span className={'profile-stats-header'}>{children}</span>);
