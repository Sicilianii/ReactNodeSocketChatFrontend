import React from 'react';

function ProfileImage({
        widthImg = 100,
        heightImg = 100
    }) {
    return (
        <img src={ require('../../assets/img/user1.png') } width={widthImg} height={heightImg} alt=""/>
    );
}

export default ProfileImage;