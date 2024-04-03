import React from 'react';
import {Link} from "react-router-dom";
import WhitePurpleButtonShared from "../WhitePurpleButtonShared/WhitePurpleButtonShared";

function ProfileListFriends({arrayFriends}) {

    const ProfileFriend = ({friend, kkey}) => {
        return(
            <li key={kkey} className={'profile-friends-item'}>
                <img src="" alt="" className={'profile-friends__img'}/>
                <span className={'profile-friends__name'}>{ friend.name }</span>
                <Link to={`/profile/${friend._id}`} className={'profile-friends__link'}>
                    <WhitePurpleButtonShared backgroundBtn={'rgb(255, 255, 255)'} colorText={'rgb(22, 22, 22)'}/>
                </Link>
            </li>
        )
    }

    return arrayFriends.map( (el, id) => <ProfileFriend friend={el} kkey={id}/> );
}

export default ProfileListFriends;