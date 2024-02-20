import './CardActiveUser.css';
import BottomButtonsUser from "./ui/BottomButtonsUser";

export default function CardActiveUser() {
    return (
        <article className={'user'}>
            <button className={'user__close-info'}>
                <svg viewBox="0 0 16 16"
                     width="16" height="16" fill="none">
                    <svg viewBox="0 0 352 512" width="16" height="16" fill="#fff"
                         x="0" y="0" opacity="100%">
                        <path
                            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                    </svg>
                </svg>
            </button>
            <div className={'user__image'}></div>
            <span className={'user__name'}>Zofiya</span>
            <span className={'user__status'}>Online now</span>
            <BottomButtonsUser />
            <ul className={'user__info'}>
                <li className={'user__info-item'}>
                    <span className={'user__info-item-name'}>Job Title</span>
                    <span className={'user__info-item-val'}>Marketing Manager</span>
                </li>
                <li className={'user__info-item'}>
                    <span className={'user__info-item-name'}>Email Address</span>
                    <a href={'mailto:john@example.com'} className={'user__info-item-val'}>john@example.com</a>
                </li>
                <li className={'user__info-item'}>
                    <span className={'user__info-item-name'}>Phone Call</span>
                    <span className={'user__info-item-val'}>Not Available</span>
                </li>
                <li className={'user__info-item'}>
                    <span className={'user__info-item-name'}>Local Timezone</span>
                    <span className={'user__info-item-val'}>12:15 PM</span>
                </li>
            </ul>
        </article>
    );
}