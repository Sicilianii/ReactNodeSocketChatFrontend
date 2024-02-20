import './TopBarActiveUser.css';
import CallButtons from "./parts/CallButtons/CallButtons";

export default function TopBarActiveUser() {
    return(
        <header className={'top-bar'}>
            <div className={'top-bar__user'}>John</div>
            <CallButtons />
        </header>
    );
}