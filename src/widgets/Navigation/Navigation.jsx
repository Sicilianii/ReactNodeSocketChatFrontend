import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutProfile} from "../../app/slice/profileInfoSlice";


export default function Navigation__widget() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOutHandle = () => {
        dispatch(logOutProfile())
        navigate('/singIn');
    }

    return(
        <ul className={'nav'}>
            <li className={'nav-item'}>
                <Link to={`/`} className={'nav-item__btn'}>
                    <svg className={'nav-item__btn-svg'} xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512" width={30} height={30} fill={'#fff'}>
                        <path
                            d="M288 32C133.27 32 7.79 132.32 7.79 256S133.27 480 288 480s280.21-100.32 280.21-224S442.73 32 288 32zm-85.39 357.19L64.1 390.55l77.25-290.74h133.44c63.15 0 84.93 28.65 78 72.84a60.24 60.24 0 0 1-1.5 6.85 77.39 77.39 0 0 0-17.21-1.93c-42.35 0-76.69 33.88-76.69 75.65 0 37.14 27.14 68 62.93 74.45-18.24 37.16-56.16 60.92-117.71 61.52zM358 207.11h32l-22.16 90.31h-35.41l-11.19-35.63-7.83 35.63h-37.83l26.63-90.31h31.34l15 36.75zm145.86 182.08H306.79L322.63 328a78.8 78.8 0 0 0 11.47.83c42.34 0 76.69-33.87 76.69-75.65 0-32.65-21-60.46-50.38-71.06l21.33-82.35h92.5l-53.05 205.36h103.87zM211.7 269.39H187l-13.8 56.47h24.7c16.14 0 32.11-3.18 37.94-26.65 5.56-22.31-7.99-29.82-24.14-29.82zM233 170h-21.34L200 217.71h21.37c18 0 35.38-14.64 39.21-30.14C265.23 168.71 251.07 170 233 170z">
                        </path>
                    </svg>
                </Link>
            </li>
            <li className={'nav-item'}>
                <Link to={`/home`} className={'nav-item__btn'}>
                    <svg className={'nav-item__btn-svg'} width={25} height={25} fill={'#fff'} viewBox="0 0 24 24" version="1.2" baseProfile="tiny"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z"/>
                    </svg>
                </Link>
            </li>
            <li className={'nav-item'}>
                <Link to={`/profile/my`} className={'nav-item__btn'}>
                    <svg className={'nav-item__btn-svg'} width={25} height={25} fill={'#fff'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z"/>
                    </svg>
                </Link>
            </li>
            <li className={'nav-item'}>
                <button className={'nav-item__btn'} onClick={ logOutHandle }>
                    <svg className={'nav-item__btn-svg'} width={25} height={25} fill={'#fff'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414z"/>
                    </svg>
                </button>
            </li>
        </ul>
    );
}