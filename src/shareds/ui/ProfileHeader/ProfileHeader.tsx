import React, {FC} from 'react';
import './_ProfileHeader.scss'

interface IProfileHeader {
    children?: React.ReactNode
}

const ProfileHeader: FC<IProfileHeader> = ({children}) => {
    return (
        <span className={'profile-stats-header'} >{children}</span>
    );
}

export default ProfileHeader;