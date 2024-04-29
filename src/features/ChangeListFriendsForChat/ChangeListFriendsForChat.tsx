import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import FullProfileName from "../../shareds/ui/FullProfileName/FullProfileName";
import WhitePurpleButton, {TypeBtn} from "../../shareds/ui/WhitePurpleButton/WhitePurpleButton";
import {IUser} from "../../shareds/types";
import './_ChangeListFriendsForChat.scss';


interface IFriendInList {
    friend: IUser,
    friendID: number,
    addUser: Dispatch<SetStateAction<IUser[]>>
}

interface InitialUse {
    friend: IUser,
    add: boolean
}

function ChangeListFriendsForChat({friend, friendID, addUser}: IFriendInList) {

    const [active, setActive] = useState<InitialUse>({
        friend: friend,
        add: false
    });

    useEffect(() => {
        if (active.add) {
            addUser( (state) => [...state, active.friend])
        } else {
            addUser((state) => {
                let id: number = state.findIndex( f => f._id === active.friend._id);
                state.splice(id, 1);
                return state;
            })
        }
    }, [active]);

    return (
        <li className={'profile-friends-item'} key={friendID}

            onClick={ () => {
                setActive(state => {
                    return {...state, add: !state.add}
                });
            } }
        >
            <img src={require(`../../shareds/assets/img/users/1.jpeg`)} alt="" className={'profile-friends__img'}/>

            <FullProfileName
                fontSizeName={'20px'}
                widthName={'100%'}
            > { friend.nameUser } </FullProfileName>

            <WhitePurpleButton className={'profile-friends__link'} type={TypeBtn.BUTTON}
                                     backgroundBtn={active.add ? 'rgb(143, 13, 239)' : undefined}
                                     colorText={active.add ? 'rgb(255, 255, 255)' : undefined}
                                     fontSIzeBnt={'16px'}
                                     fontWeightBnt={'600'}
                                     widthBtn={'80px'}
            >
                {active.add ? 'Cancel' : 'Add'}
            </WhitePurpleButton>
        </li>
    )

}

export default ChangeListFriendsForChat;