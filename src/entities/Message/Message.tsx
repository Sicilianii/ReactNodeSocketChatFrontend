import {IMessages} from "../../shareds/types";
import './_Message.scss';
import React from "react";

type ListMessages = {
    listMess: IMessages[]
}

export default function Message({listMess}: ListMessages) {
    return (
        <ul className={'message__body-text'}>

            { listMess.map((item, id) =>

                <li className={'message__body-text-item'} key={id}>
                    <span className={'message__body-text-item-p'}> {item.body_mess} </span>
                    <span className={'message__body-text-item-time'}> {Number(item.time_mess).valueOf()} </span>
                </li>

            )}

        </ul>
    )
}