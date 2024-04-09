import React, {useEffect, useState} from 'react';
import FullProfileName from "../../shared/ui/FullProfileName/FullProfileName";
import {Link} from "react-router-dom";
import WhitePurpleButtonShared from "../../shared/ui/WhitePurpleButtonShared/WhitePurpleButtonShared";

function ChangeListFriendsForChat({friend, friendID, addUser}) {

    const [active, setActive] = useState({
        id: friend._id,
        add: false
    });

    useEffect(() => {
        if (active.add) {
            addUser(state => {
                return [...state, active.id]
            })
        } else {
            addUser(state => {
                let id = state.indexOf(active.id);
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
            <img src={require(`../../shared/assets/img/users/1.jpeg`)} alt="" className={'profile-friends__img'}/>

            <FullProfileName
                fontSizeName={'20px'}
                widthName={'100%'}
            > { friend.nameUser } </FullProfileName>

                <WhitePurpleButtonShared className={'profile-friends__link'} type={'button'}
                    backgroundBtn={active.add && 'rgb(143, 13, 239)'}
                    colorText={active.add && 'rgb(255, 255, 255)'}
                    fontSIzeBnt={'16px'}
                    fontWeightBnt={'600'}
                    widthBtn={'80px'}
                >
                    {active.add ? 'Cancel' : 'Add'}
                </WhitePurpleButtonShared>
        </li>
    )

}

export default ChangeListFriendsForChat;