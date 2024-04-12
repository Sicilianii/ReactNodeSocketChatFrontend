import React from 'react';
import {Navigate, useLoaderData} from "react-router-dom";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import { useSelector} from "react-redux";
import ProfileFindNewFriends from "../../widgets/ProfileFindNewFriends/ProfileFindNewFriends";
import ProfileSubscription from "../../widgets/ProfileSubscription/ProfileSubscription";
import ProfileFriendsList from "../../widgets/ProfileFriendsList/ProfileFriendsList";
import ProfileStatistics from "../../widgets/ProfileStatistics/ProfileStatistics";
import ProfileInfo from "../../widgets/ProfileInfo/ProfileInfo";

function MyProfile() {

    const myProfileInfo = useSelector(state => state.profile);
    const myProfileFriends = useSelector(state => state.user);


    return myProfileInfo.auth ? (
        <main className={'main container'}>
            <Navigation__widget />
            <div className={'page-wrapper'}>

                <section className={'profile'}>

                    <ProfileInfo profile={myProfileInfo.entities}/>

                    <ProfileStatistics />

                    <ProfileSubscription profile={myProfileInfo.entities}/>

                    <ProfileFriendsList friends={myProfileFriends.entities}/>

                    <ProfileFindNewFriends profile={myProfileInfo.entities}/>

                </section>

            </div>
        </main>
    ) : <Navigate to="/singIn"/>
}

export default MyProfile;