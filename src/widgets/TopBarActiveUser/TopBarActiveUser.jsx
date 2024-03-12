
import CallButtons from "../../entities/CallButtons/CallButtons";
import {useContext} from "react";

export default function TopBarActiveUser__widget() {

    return(
        <section className={'top-bar'}>
            <div className={'top-bar__user'}>John</div>
            <CallButtons />
        </section>
    );
}