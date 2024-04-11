import React from 'react';
import ProfileHeader from "../../shared/ui/ProfileHeader/ProfileHeader";
import ProfileListFriends from "../../shared/ui/ProfileListFriends/ProfileListFriends";

function ProfileFriendsList({friends}) {
    return (
        <div className={'profile-friends'}>
            <ProfileHeader>{friends.length ? 'Friends' : 'Friends (You have no friends)'}</ProfileHeader>
            {friends.length ?
                <ul className={'profile-friends-wrapper'}>

                    {/* here must be array users from useLoaderData*/}
                    <ProfileListFriends arrayFriends={friends}/>

                </ul> : ''
            }
        </div>
    );
}

export default ProfileFriendsList;