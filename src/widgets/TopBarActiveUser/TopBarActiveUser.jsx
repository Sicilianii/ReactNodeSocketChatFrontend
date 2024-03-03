
import CallButtons from "../../entities/CallButtons/CallButtons";

export default function TopBarActiveUser__widget() {
    return(
        <section className={'top-bar'}>
            <div className={'top-bar__user'}>John</div>
            <CallButtons />
        </section>
    );
}