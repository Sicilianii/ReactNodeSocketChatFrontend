import React from 'react';
import ProfileImage from "../../shareds/ui/ProfileImage/ProfileImage";
import MyProfileChangePlace from "../../shareds/ui/MyProfileChangeFullName/MyProfileChangeFullName";
import ProfileJobTitle from '../../shareds/ui/ProfileJobTitle/ProfileJobTitle';
import ProfileStats from '../../shareds/ui/ProfileStats/ProfileStats';
import {changeProfileJobTitle, changeProfileName} from "../../app/store/slices/profile.slice";
import {useDispatch} from "react-redux";
import {IUser} from "../../shareds/types";
import './_MyProfileInfo.scss'

interface IMyProfileInfo {
    profile: IUser
}

function MyProfileInfo({profile}: IMyProfileInfo) {
    const dispatch = useDispatch();

    const changeName = async (name: string) => {
        await fetch(`/profile/${profile._id}/newName`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                "newName": name
            })
        }).then( data => data.json()).then(data => {
            if (data.acknowledged) dispatch(changeProfileName({name: name}));
        }).catch( e => {
            console.log(e)
        })
    }

    const changeJobTitle = async (title: string) => {
        await fetch(`/profile/${profile._id}/newTitle`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                "newTitle": title
            })
        }).then( data => data.json()).then(data => {
            if (data.acknowledged) dispatch(changeProfileJobTitle({title: title}));
        }).catch( e => {
            console.log(e)
        })
    }

    return (
        <div className="profile-info">
            <ProfileImage widthImg={100} heightImg={100}/>
            <div className={'profile-info__data'}>
                <MyProfileChangePlace fontSizePlace={'24px'}
                                      changeFuncPlace={changeName}>{profile.nameUser}</MyProfileChangePlace>
                <ProfileJobTitle>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width={10}
                         height={10}
                         fill={'rgb(255, 255, 255)'}
                         viewBox="0 0 448 512">
                        <path
                            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                    </svg>
                    <MyProfileChangePlace changeFuncPlace={changeJobTitle}
                                          widthPlace={'200px'}>{profile.job_title}</MyProfileChangePlace>
                </ProfileJobTitle>
                <ProfileStats peopleKnow={1} followers={5} following={20}/>
            </div>
        </div>
    );
}

export default MyProfileInfo;