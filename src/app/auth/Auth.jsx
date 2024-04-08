import { useLocation, Navigate } from 'react-router-dom'
import {useSelector} from "react-redux";

const RequireAuth = (props) => {
    const myProfileInfo = useSelector(state => state.profile);

    console.log(myProfileInfo)
    // const location = useLocation()



    return props.children
}

export default RequireAuth