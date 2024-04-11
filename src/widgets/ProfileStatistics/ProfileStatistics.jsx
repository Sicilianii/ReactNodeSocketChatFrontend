import React from 'react';
import ProfileHeader from "../../shared/ui/ProfileHeader/ProfileHeader";
import StatisticsItem from "../../shared/ui/StatisticsItem/StatisticsItem";

function ProfileStatistics() {
    return (
        <div className={'profile-statistic'}>
            <ProfileHeader>Statistics</ProfileHeader>
            <div className={'profile-statistic-box'}>
                <StatisticsItem nameStats={'Courses Completed'} countStats={3}/>
                <StatisticsItem nameStats={'Hours Invested'} countStats={56} svgIcon={'hourglass'}/>
                <StatisticsItem nameStats={'Skills Acquired'} countStats={7} svgIcon={'cup'}/>
            </div>
        </div>
    );
}

export default ProfileStatistics;