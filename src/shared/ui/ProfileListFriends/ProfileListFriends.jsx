import React from 'react';
import {Link} from "react-router-dom";
import WhitePurpleButtonShared from "../WhitePurpleButtonShared/WhitePurpleButtonShared";
import FullProfileName from "../FullProfileName/FullProfileName";

function ProfileListFriends({ arrayFriends }) {

    const ProfileFriend = ({friend, kkey}) => {
        return(
            <li key={kkey} className={'profile-friends-item'}>
                <img src={require(`../../assets/img/users/1.jpeg`)} alt="" className={'profile-friends__img'}/>

                <FullProfileName
                    fontSizeName={'20px'}
                    widthName={'100%'}
                > { friend.nameUser } </FullProfileName>

                <Link to={`/profile/${friend._id}`} className={'profile-friends__link'}>
                    <WhitePurpleButtonShared
                        backgroundBtn={'rgb(255, 255, 255)'}
                        colorText={'rgb(22, 22, 22)'}
                        fontSIzeBnt={'16px'}
                        fontWeightBnt={'600'}
                        widthBtn={'80px'}
                    >
                        Profile
                    </WhitePurpleButtonShared>
                </Link>
            </li>
        )
    }

    return arrayFriends?.map( (el, id) => <ProfileFriend friend={el} kkey={id}/> );
}

export default ProfileListFriends;