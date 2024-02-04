import './CardActiveUser.css';
import BottomButtonsUser from "./parts/BottomButtonsUser";

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
                    <defs>
                        <filter id="filter_dshadow_0_0_0_00000014" color-interpolation-filters="sRGB"
                                filterUnits="userSpaceOnUse">
                            <feFlood flood-opacity="0" result="bg-fix"></feFlood>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="alpha"></feColorMatrix>
                            <feOffset dx="0" dy="0"></feOffset>
                            <feGaussianBlur stdDeviation="0"></feGaussianBlur>
                            <feComposite in2="alpha" operator="out"></feComposite>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                            <feBlend mode="normal" in2="bg-fix" result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                            <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                     result="shape"></feBlend>
                        </filter>
                    </defs>
                </svg>
            </button>
            <div className={'user__image'}></div>
            <span className={'user__name'}>Zofiya</span>
            <span className={'user__status'}>Online now</span>
            <BottomButtonsUser />
        </article>
    );
}