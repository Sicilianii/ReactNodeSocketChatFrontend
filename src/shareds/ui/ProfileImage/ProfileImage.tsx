import React from 'react';

interface IProfileImage {
    widthImg: number,
    heightImg: number
}

const ProfileImage = ({widthImg = 100, heightImg = 100}: IProfileImage) => {
    return (
        <img src={ require('../../assets/img/user1.png') } width={widthImg} height={heightImg} alt=""/>
    );
}

export default ProfileImage;