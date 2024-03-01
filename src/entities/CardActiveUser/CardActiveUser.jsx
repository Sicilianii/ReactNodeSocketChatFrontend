

export default function CardActiveUser__entities() {
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
            <div className={'user__buttons'}>
                <button className={'user__buttons-btn'}>
                    <svg viewBox="0 0 512 512" width="14" height="14" fill="#fff"
                         x="13" y="13">
                        <path
                            d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"></path>
                    </svg>
                </button>
                <button className={'user__buttons-btn'}>
                    <svg viewBox="0 0 512 512" width="14" height="14" fill="#fff"
                         x="13" y="13">
                        <path
                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path>
                    </svg>
                </button>
                <button className={'user__buttons-btn'}>
                    <svg viewBox="0 0 576 512" width="14" height="14" fill="#fff"
                         x="13" y="13">
                        <path
                            d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"></path>
                    </svg>
                </button>
            </div>
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