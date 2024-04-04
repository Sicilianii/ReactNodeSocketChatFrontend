import React from 'react';

function ProfileHeader({children}) {
    return (
        <span className={'profile-stats-header'} >{children}</span>
    );
}

export default ProfileHeader;