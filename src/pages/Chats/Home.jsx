import YourChats__widget from "../../widgets/YourChats/YourChats";
import Search__widget from "../../widgets/Search/Search";
import Navigation__widget from "../../widgets/Navigation/Navigation";
import {Outlet} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {STORE} from "../../app/store/store";
import {getAllUsersAPI} from "../../app/slice/usersSlice";
import {getAllGroupChatAPI} from "../../app/slice/groupChatSlice";
import {getAllRecentChatAPI} from "../../app/slice/recentChatSlice";



STORE.dispatch(getAllUsersAPI('65dd9ad63a31f02dbde4ab58'));
STORE.dispatch(getAllGroupChatAPI('65dd9ad63a31f02dbde4ab58'));
STORE.dispatch(getAllRecentChatAPI('65dd9ad63a31f02dbde4ab58'));
export default function Home() {

    // const users = useSelector( state => state)
    // console.log(users, 'this log users from Home comp')

    return(
        <main className={'main container'}>
            <Navigation__widget />
            <div className={'page-wrapper'}> 
                <Search__widget />
                <div className={'chat-wrapper'}>
                    <YourChats__widget />
                    <Outlet  />
                </div>
            </div>
        </main>
    );
}