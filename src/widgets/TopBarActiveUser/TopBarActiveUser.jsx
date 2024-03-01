import './TopBarActiveUser.css';
import CallButtons from "../../entities/CallButtons/CallButtons";

export default function TopBarActiveUser__widget() {
    return(
        <header className={'top-bar'}>
            <div className={'top-bar__user'}>John</div>
            <CallButtons />
        </header>
    );
}