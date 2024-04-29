import React, {useEffect, useState} from 'react';
import ProfileListFriends from '../../entities/ProfileListFriends/ProfileListFriends';
import useDebounce from "../../shareds/lib/hooks/useDebounce";
import ProfileHeader from '../../shareds/ui/ProfileHeader/ProfileHeader';
import WhitePurpleButton from '../../shareds/ui/WhitePurpleButton/WhitePurpleButton';
import {IUser} from "../../shareds/types";
import './_ProfileFindNewFriends.scss';

interface IProfileFindNewFriends {
    profile: IUser
}

function ProfileFindNewFriends({profile}: IProfileFindNewFriends) {

    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [listSearchFriends, setListSearchFriends] = useState([]);
    const debouncedValue = useDebounce(inputValue, 2000)

    useEffect(() => {
        if (debouncedValue) {
            searchUsers(debouncedValue).then( data => {
                setLoading(false);
                if (data.status) {
                    setListSearchFriends(data.entities)
                }
            })
        } else {
            setLoading(false);
            setListSearchFriends([]);
        }
    }, [debouncedValue]);


    const searchUsers = async (query: string) => {
        return await fetch(`/profile/${profile._id}/search`, {
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
                "search": query,
                "friends": profile.friends
            })
        }).then( response => response.json()).catch( e => {
            console.log(e)
        })
    }


    return (
        <div className={'profile-find'}>
            <ProfileHeader>Find Friend</ProfileHeader>
            <div className={'profile-find-wrap'}>
                <form className={'profile-find-form'}>
                    <div className={'input-wrap'}>
                        <input type="email" placeholder={'mike@example.com'} id={'profile-find'}
                               className={'profile-find-wrap__input'}
                               onChange={ event => {
                                   setLoading(true);
                                   setInputValue(event.target.value)}
                               }
                        />
                        {loading ?
                            <svg className={'profile-find-wrap__spinner spinner'} fill="rgb(255, 255, 255)" width="20" height="20" viewBox="0 0 32 32"
                                 version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 0.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0c7.042 0.001 12.75 5.71 12.75 12.751 0 3.521-1.427 6.709-3.734 9.016v0c-0.226 0.226-0.365 0.538-0.365 0.883 0 0.69 0.56 1.25 1.25 1.25 0.346 0 0.659-0.14 0.885-0.367l0-0c2.759-2.76 4.465-6.572 4.465-10.782 0-8.423-6.828-15.251-15.25-15.251h-0z"></path>
                            </svg> : ''}
                    </div>
                    <WhitePurpleButton
                        fontSIzeBnt={'16px'}
                        fontWeightBnt={'200'}
                        widthBtn={'fit-content'}
                        paddingGtn={'14px 24px'}
                    >
                        Find
                    </WhitePurpleButton>
                </form>
                <ul className={'profile-find-list'}>
                    <ProfileListFriends friends={listSearchFriends}/>
                </ul>
            </div>
        </div>
    );
}

export default ProfileFindNewFriends;