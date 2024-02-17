export default function Message({listMess}) {
    console.log(listMess)
    return (
        <ul className={'message__body-text'}>

            { listMess.map((item, id) =>

                <li key={id}>
                    <span> {item.body_mess} </span>
                    <span> {item.time_mess} </span>
                </li>

            )}

        </ul>
    )
}