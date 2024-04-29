import React, {FC} from 'react';
import './_ProfileJobTitle.scss'

interface IProfileJobTitle {
    children?: React.ReactNode
}

const ProfileJobTitle:FC<IProfileJobTitle> = ({children}) => {
    return (
        <span className={'profile-job-title'}>{children}</span>
    );
}

export default ProfileJobTitle;