import PhoneCall from "../../shareds/ui/PhoneCall/PhoneCall";
import VideoCall from "../../shareds/ui/VideoCall/VideoCall";
import './_CallButtons.scss'


const CallButtons = () => {
    return(
        <div className={'top-bar__wrapper'}>
            <PhoneCall />
            <VideoCall />
        </div>
    );
}

export default CallButtons;