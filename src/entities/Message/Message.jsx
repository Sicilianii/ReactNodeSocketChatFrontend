export default function Message({listMess}) {
    return (
        <ul className={'message__body-text'}>

            { listMess.map((item, id) =>

                <li className={'message__body-text-item'} key={id}>
                    <span className={'message__body-text-item-p'}> {item.body_mess} </span>
                    <span className={'message__body-text-item-time'}> {item.time_mess} </span>
                </li>

            )}

        </ul>
    )
}