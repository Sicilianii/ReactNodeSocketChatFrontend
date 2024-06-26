import React, {FC} from 'react';
import './_ProfileStats.scss'

interface IProfileStats {
    peopleKnow?: number,
    followers?: number,
    following?: number
}


const ProfileStats: FC<IProfileStats> = ({peopleKnow = 0, followers = 0, following = 0}) => {
    return (
        <div className={'profile-stats'}>
            <div className={'profile-stats-item'}>
                <span className={'profile-stats-item__count'}>{peopleKnow}</span>
                <span className={'profile-stats-item__des'}>People I know</span>
            </div>
            <div className={'profile-stats-item'}>
                <span className={'profile-stats-item__count'}>{followers}</span>
                <span className={'profile-stats-item__des'}>Followers</span>
            </div>
            <div className={'profile-stats-item'}>
                <span className={'profile-stats-item__count'}>{following}</span>
                <span className={'profile-stats-item__des'}>Following</span>
            </div>
        </div>
    );
}

export default ProfileStats;