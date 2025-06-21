import type {FC} from 'react';

interface IProfileImageProps {
    widthImg?: number,
    heightImg?: number
}

export const ProfileImage: FC<IProfileImageProps> = ({widthImg, heightImg}) => (<img src={ require('../../assets/img/user1.png') } width={widthImg ?? 100} height={heightImg ?? 100} alt=''/>);
