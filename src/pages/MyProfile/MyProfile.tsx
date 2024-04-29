import {Navigate} from "react-router-dom";
import React from "react";
import Navigation from "../../widgets/Navigation/Navigation";
import ProfileStatistics from "../../widgets/ProfileStatistics/ProfileStatistics";
import ProfileFriendsList from "../../entities/ProfileListFriends/ProfileListFriends";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import MyProfileInfo from "../../widgets/MyProfileInfo/MyProfileInfo";
import './_MyProfile.scss';
import ProfileSubscription from "../../widgets/ProfileSubscription/ProfileSubscription";
import ProfileFindNewFriends from "../../widgets/ProfileFindNewFriends/ProfileFindNewFriends";


function MyProfile() {

    const myProfileInfo = useTypedSelector(state => state.profile);

    return myProfileInfo.auth ? (
        <main className={'main container'}>
            <Navigation />
            <div className={'page-wrapper'}>

                <section className={'profile'}>

                    <MyProfileInfo profile={myProfileInfo.entities}/>

                    <ProfileStatistics />

                    <ProfileSubscription profile={myProfileInfo.entities}/>

                    <ProfileFriendsList friends={myProfileInfo.entities.friends}/>

                    <ProfileFindNewFriends profile={myProfileInfo.entities}/>

                </section>

            </div>
        </main>
    ) : <Navigate to="/singIn"/>
}

export default MyProfile;