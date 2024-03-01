
import PhoneCall from "../../shared/ui/PhoneCall/PhoneCall";
import VideoCall from "../../shared/ui/VideoCall/VideoCall";

export default function CallButtons() {
    return(
        <div className={'box-button'}>
            <PhoneCall />
            <VideoCall />
        </div>
    );
}