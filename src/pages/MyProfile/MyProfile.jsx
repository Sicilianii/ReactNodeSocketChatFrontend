import Navigation__widget from "../../widgets/Navigation/Navigation";
import {useLoaderData} from "react-router-dom";
import ProfileImage from "../../shared/ui/ProfileImage/ProfileImage";
import FullProfileName from "../../shared/ui/FullProfileName/FullProfileName";
import ProfileJobTitle from "../../shared/ui/ProfileJobTitle/ProfileJobTitle";
import ProfileStats from "../../shared/ui/ProfileStats/ProfileStats";
import ProfileHeader from "../../shared/ui/ProfileHeader/ProfileHeader";
import StatisticsItem from "../../shared/ui/StatisticsItem/StatisticsItem";

export default function MyProfile() {

    // const userInfo = useLoaderData();


    return(
        <>
            <main className={'main container'}>
                <Navigation__widget />
                <div className={'page-wrapper'}>
                    
                <section className={'profile'}>

                    <div className="profile-info">
                        <ProfileImage  widthImg={160} heightImg={160}/>
                        <div className={'profile-info__data'}>
                            <FullProfileName>John Smith</FullProfileName>
                            <ProfileJobTitle>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width={15}
                                     height={15}
                                     fill={'rgb(255, 255, 255)'}
                                     viewBox="0 0 448 512">
                                    <path
                                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                                </svg>
                                Marketing SEO
                            </ProfileJobTitle>
                            <ProfileStats peopleKnow={1} followers={5} following={20}/>
                        </div>
                    </div>

                    <div className={'profile-statistic'}>
                        <ProfileHeader>Statistics</ProfileHeader>
                        <div className={'profile-statistic-box'}>
                            <StatisticsItem nameStats={'Courses Completed'} countStats={3}/>
                            <StatisticsItem nameStats={'Hours Invested'} countStats={56} svgIcon={'hourglass'}/>
                            <StatisticsItem nameStats={'Skills Acquired'} countStats={7} svgIcon={'cup'}/>
                        </div>
                    </div>

                </section>

                </div>
            </main>
        </>
    );
}