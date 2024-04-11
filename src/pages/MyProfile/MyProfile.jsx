import React from 'react';
import {Navigate, useLoaderData} from "react-router-dom";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import ProfileImage from "../../shared/ui/ProfileImage/ProfileImage";
import FullProfileName from "../../shared/ui/FullProfileName/FullProfileName";
import ProfileJobTitle from "../../shared/ui/ProfileJobTitle/ProfileJobTitle";
import ProfileStats from "../../shared/ui/ProfileStats/ProfileStats";
import ProfileHeader from "../../shared/ui/ProfileHeader/ProfileHeader";
import StatisticsItem from "../../shared/ui/StatisticsItem/StatisticsItem";
import ProfileListFriends from "../../shared/ui/ProfileListFriends/ProfileListFriends";
import {useDispatch, useSelector} from "react-redux";
import MyProfileChangePlace from "../../shared/ui/MyProfileChangeFullName/MyProfileChangeFullName";
import md5 from "md5";
import {changeProfileJobTitle, changeProfileName} from "../../app/slice/profileInfoSlice";
import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";
import ProfileFindNewFriends from "../../widgets/ProfileFindNewFriends/ProfileFindNewFriends";
import ProfileSubscription from "../../widgets/ProfileSubscription/ProfileSubscription";
import ProfileFriendsList from "../../widgets/ProfileFriendsList/ProfileFriendsList";
import ProfileStatistics from "../../widgets/ProfileStatistics/ProfileStatistics";
import ProfileInfo from "../../widgets/ProfileInfo/ProfileInfo";

function MyProfile() {

    const myProfileInfo = useSelector(state => state.profile);
    const myProfileFriends = useSelector(state => state.user);

    console.log(myProfileInfo)

    return myProfileInfo.auth ? (
        <main className={'main container'}>
            <Navigation__widget />
            <div className={'page-wrapper'}>

                <section className={'profile'}>

                    <ProfileInfo profile={myProfileInfo.entities}/>

                    <ProfileStatistics />

                    <ProfileSubscription profile={myProfileInfo.entities}/>

                    <ProfileFriendsList friends={myProfileFriends.entities}/>

                    <ProfileFindNewFriends />

                </section>

            </div>
        </main>
    ) : <Navigate to="/singIn"/>
}

export default MyProfile;