import React, {useMemo} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import WhitePurpleButton from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";
import ProfileImage from "../../shareds/ui/ProfileImage/ProfileImage";
import FullProfileName from "../../shareds/ui/FullProfileName/FullProfileName";
import ProfileJobTitle from "../../shareds/ui/ProfileJobTitle/ProfileJobTitle";
import ProfileStats from "../../shareds/ui/ProfileStats/ProfileStats";
import {befriend, squabble} from "../../app/store/slices/profile.slice";
import './_OtherProfileInfo.scss';
import {IUser} from "../../shareds/types";

interface IOtherProfileInfo {
    profile: IUser
}

function OtherProfileInfo({profile}: IOtherProfileInfo) {

    const myProfileInfo = useTypedSelector(state => state.profile);
    const dispatch = useDispatch();

    let check: number = useMemo(() => {
        if (myProfileInfo.entities.friends) {
            return myProfileInfo.entities.friends.findIndex(friend => friend._id === profile._id)
        } else return 0
        }, [myProfileInfo.entities.friends, profile._id]
    );


    const changeFriendly = async (statusFriend: number) => {
        if (statusFriend) {
            return await fetch(`/profile/${myProfileInfo.entities._id}/squabble/${profile._id}`)
                .then(response => response.json())
                .then(result => {
                    if (result.status) {
                        if (result.status) {
                            dispatch(squabble(profile._id));
                        }
                    }
                }).catch(e => console.log(e))
        } else {
            return await fetch(`/profile/${myProfileInfo.entities._id}/befriend/${profile._id}`)
                .then(response => response.json())
                .then(result => {
                    if (result.status) {
                        dispatch(befriend(profile));
                    }
                }).catch(e => console.log(e))
        }
    }

    return (
        <div className="profile-info">
            <ProfileImage widthImg={100} heightImg={100}/>
            <div className={'profile-info__data'}>
                <div className={'profile-info__wrap'}>
                    <FullProfileName>{profile.nameUser}</FullProfileName>
                    <form onSubmit={ (event) => {
                        event.preventDefault();
                        changeFriendly(check);
                    } }>
                        <WhitePurpleButton
                            backgroundBtn={check ? 'transparent' : 'rgb(255, 255, 255)'}
                            colorText={check ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)'}
                            fontSIzeBnt={'16px'}
                            fontWeightBnt={'200'}
                            widthBtn={'fit-content'}
                            paddingGtn={'10px 24px'}
                            border={check ? '1px solid rgb(67, 67, 67)' : 'none'}
                        >
                            {check ? 'Friend' : 'Befriend'}
                        </WhitePurpleButton>
                    </form>
                </div>

                <ProfileJobTitle>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={10}
                         height={10}
                         fill={'rgb(255, 255, 255)'}
                         viewBox="0 0 448 512">
                        <path
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                    </svg>
                    {profile.job_title}
                </ProfileJobTitle>
                <ProfileStats peopleKnow={1} followers={5} following={20}/>
            </div>
        </div>
    );
}

export default OtherProfileInfo;