import type {FC} from 'react';
import './_ProfileStats.scss'

interface IProfileStatsProps {
    peopleKnow?: number,
    followers?: number,
    following?: number
}

export const ProfileStats: FC<IProfileStatsProps> = ({peopleKnow, followers, following}) => {
    return (
        <div className='profile-stats'>
            <div className='profile-stats-item'>
                <span className='profile-stats-item__count'>{peopleKnow ?? 0}</span>
                <span className='profile-stats-item__des'>People I know</span>
            </div>
            <div className='profile-stats-item'>
                <span className='profile-stats-item__count'>{followers ?? 0}</span>
                <span className='profile-stats-item__des'>Followers</span>
            </div>
            <div className='profile-stats-item'>
                <span className='profile-stats-item__count'>{following ?? 0}</span>
                <span className='profile-stats-item__des'>Following</span>
            </div>
        </div>
    );
}
