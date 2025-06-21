import {FC, PropsWithChildren} from 'react';
import './_ProfileJobTitle.scss'

export const ProfileJobTitle:FC<PropsWithChildren> = ({children}) => (<span className='profile-job-title'>{children}</span>);
