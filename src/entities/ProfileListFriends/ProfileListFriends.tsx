import React from 'react';
import {Link} from "react-router-dom";
import FullProfileName from '../../shareds/ui/FullProfileName/FullProfileName';
import WhitePurpleButton from '../../shareds/ui/WhitePurpleButton/WhitePurpleButton';
import {IUser} from "../../shareds/types";
import ProfileHeader from "../../shareds/ui/ProfileHeader/ProfileHeader";
import './_ProfileListFriends.scss';

interface IProfileListFriends {
    friends?: IUser[]
}

function ProfileFriendsList({friends} : IProfileListFriends) {
    return friends ? (
        <div className={'profile-friends'}>
            <ProfileHeader>{friends.length ? 'Friends' : 'Friends (Have no friends)'}</ProfileHeader>
            {friends.length ?
                <ul className={'profile-friends-wrapper'}>
                    {
                        friends.map( (el :IUser , id: number) =>
                            <li key={id} className={'profile-friends-item'}>
                                <img src={require(`../../shareds/assets/img/users/1.jpeg`)} alt="" className={'profile-friends__img'}/>
                                <FullProfileName
                                    fontSizeName={'20px'}
                                    widthName={'100%'}
                                > { el.nameUser } </FullProfileName>
                                <Link to={`/profile/${el._id}`} className={'profile-friends__link'}>
                                    <WhitePurpleButton
                                        backgroundBtn={'rgb(255, 255, 255)'}
                                        colorText={'rgb(22, 22, 22)'}
                                        fontSIzeBnt={'16px'}
                                        fontWeightBnt={'600'}
                                        widthBtn={'80px'}
                                    >
                                        Profile
                                    </WhitePurpleButton>
                                </Link>
                            </li>
                        )
                    }
                </ul> : ''
            }
        </div>
    ) : null
}

export default ProfileFriendsList;
