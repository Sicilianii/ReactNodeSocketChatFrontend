import {Navigate} from "react-router-dom";
import './_OtherProfile.scss'
import React from "react";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import {IUser} from "../../shareds/types";
import {useTypedLoaderData} from "../../shareds/lib/hooks/useTypedLoaderData";
import Navigation from "../../widgets/Navigation/Navigation";
import OtherProfileInfo from "../../widgets/OtherProfileInfo/OtherProfileInfo";
import ProfileListFriends from "../../entities/ProfileListFriends/ProfileListFriends";
import ProfileStatistics from "../../widgets/ProfileStatistics/ProfileStatistics";

interface ILoaderData {
    currentProfile: IUser,
}

export default function OtherProfile() {

    const currentProfile: IUser = useTypedLoaderData<IUser>();

    console.log(currentProfile)


    const myProfileInfo = useTypedSelector(state => state.profile);


    return myProfileInfo.auth ? (
        <main className={'main container'}>
            <Navigation />
            <div className={'page-wrapper'}>

                <section className={'profile'}>

                    <OtherProfileInfo profile={currentProfile}/>

                    <ProfileStatistics />

                    <ProfileListFriends friends={currentProfile.friends} />

                </section>

            </div>
        </main>
    ) : <Navigate to="/singIn" />
}