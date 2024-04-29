import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {IUser} from "../../shareds/types";
import ProfileHeader from "../../shareds/ui/ProfileHeader/ProfileHeader";
import WhitePurpleButton, {TypeBtn} from '../../shareds/ui/WhitePurpleButton/WhitePurpleButton';
import {subscription} from "../../app/store/slices/profile.slice";
import './_ProfileSubscription.scss';

interface IProfileSubscription {
    profile: IUser
}

function ProfileSubscription({profile}: IProfileSubscription) {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);


    const subs = async () => {
        setLoading(true);
        await fetch(`/profile/${profile._id}/subscription`)
            .then( response => response.json())
            .then(subs => {
                console.log(subs)
                if (subs.acknowledged || subs.subscription) {
                    dispatch(subscription()); setLoading(false)
                } else console.log('kakayato huyna')
            })
            .catch( e => {
                console.log(e)
            })
    }

    return (
        <div className={'profile-subscription'}>
            <ProfileHeader>Subscription</ProfileHeader>
            <form className={'profile-subscription-wrap'} onSubmit={ event => {
                event.preventDefault();
                subs();
            }}>
                <span className={'profile-subscription-wrap__head'}>Record up to 100 minutes of video per month. Need more?</span>
                <WhitePurpleButton
                    backgroundBtn={profile.subscription ? 'transparent' : 'rgb(255, 255, 255)'}
                    colorText={profile.subscription ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)'}
                    fontSIzeBnt={'16px'}
                    fontWeightBnt={'200'}
                    widthBtn={'fit-content'}
                    paddingGtn={'10px 24px'}
                    type={TypeBtn.SUBMIT}
                    disable={profile.subscription}
                    border={profile.subscription ? '1px solid rgb(67, 67, 67)' : 'none'}
                >
                    {profile.subscription ? 'Upgraded' : 'Upgrade'}
                </WhitePurpleButton>
                {loading ?
                    <svg className={'profile-subscription-wrap__spinner spinner'} fill="rgb(255, 255, 255)" width="20" height="20" viewBox="0 0 32 32"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 0.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0c7.042 0.001 12.75 5.71 12.75 12.751 0 3.521-1.427 6.709-3.734 9.016v0c-0.226 0.226-0.365 0.538-0.365 0.883 0 0.69 0.56 1.25 1.25 1.25 0.346 0 0.659-0.14 0.885-0.367l0-0c2.759-2.76 4.465-6.572 4.465-10.782 0-8.423-6.828-15.251-15.25-15.251h-0z"></path>
                    </svg> : ''}
            </form>
        </div>
    );
}

export default ProfileSubscription;