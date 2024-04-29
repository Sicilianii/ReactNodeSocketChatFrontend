import React from 'react';
import ProfileHeader from "../../shareds/ui/ProfileHeader/ProfileHeader";
import StatisticsItem, {SVGIcon} from "../../shareds/ui/StatisticsItem/StatisticsItem";
import './_ProfileStatistics.scss';


function ProfileStatistics() {
    return (
        <div className={'profile-statistic'}>
            <ProfileHeader>Statistics</ProfileHeader>
            <div className={'profile-statistic-box'}>
                <StatisticsItem nameStats={'Courses Completed'} countStats={3} Icon={SVGIcon.COMPLETED}/>
                <StatisticsItem nameStats={'Hours Invested'} countStats={56} Icon={SVGIcon.HOURGLASS}/>
                <StatisticsItem nameStats={'Skills Acquired'} countStats={7} Icon={SVGIcon.CUP}/>
            </div>
        </div>
    );
}

export default ProfileStatistics;