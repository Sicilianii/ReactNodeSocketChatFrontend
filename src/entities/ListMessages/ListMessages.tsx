import {Link} from "react-router-dom";
import React, {FC, useContext, useMemo} from "react";
import {IMessages, IUser} from "../../shareds/types";
import {ChatContext} from "../../app/contexts";
import {useTypedSelector} from "../../shareds/lib/hooks/useTypeSelector";
import './_ListMessages.scss';

interface IListMessages {
    messages: IMessages[]
}

const ListMessages: FC<IListMessages> = ({messages}) => {

    const chat = useContext(ChatContext);
    const my: IUser = useTypedSelector(state => state.profile.entities);

    const currentUser: IUser | undefined = useMemo((): IUser | undefined => {
        return chat?.users?.find( u => u._id !== my._id);
    }, [chat?.users, my._id])

    return <>
        {
            messages.map( (item,id) =>
                <li key={id} className={'message'}>
                    <div className={'message__img-prof'}></div>
                    <div className={'message__body'}>
                        <span className={'message__body-head'}>
                            <Link
                                className={'message__body-head-name'}
                                to={`/profile/${currentUser?._id || 'my'}`}
                            >
                                { currentUser?.nameUser || 'You'}
                            </Link>
                            <span className={'message__body-head-time'}> {String(item.time_mess).valueOf()}</span>
                        </span>
                        <ul className={'message__body-text'}>

                            <li className={'message__body-text-item'} key={id}>
                                <span className={'message__body-text-item-p'}> {item.body_mess} </span>
                                <span className={'message__body-text-item-time'}> {String(item.time_mess).valueOf()} </span>
                            </li>

                        </ul>
                    </div>
                </li>
            )
        }
    </>
}

export default ListMessages;