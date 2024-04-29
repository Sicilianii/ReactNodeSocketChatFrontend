import React from "react";
import './_UserNetworkStatus.scss';

const UserNetworkStatus = () => {
    return (
        <section className={'user-net-status'}>
            <span className={'user-net-status__marker'}></span>
            <span className={'user-net-status__des'}>Online now (STATIC)</span>
        </section>
    );
}

export default UserNetworkStatus