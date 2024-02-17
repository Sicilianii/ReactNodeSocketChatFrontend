export default function Message({listMess}) {

    return listMess.map( (item, id) => {
        <li key={id}>
            <span> {item.body_mess} </span>
            <span> {item.time_mess} </span>
        </li>
    });
}