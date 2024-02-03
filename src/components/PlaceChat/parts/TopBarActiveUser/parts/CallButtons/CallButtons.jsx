import './CallButtons.css';

export default function CallButtons() {
    return(
        <div className={'box-button'}>
            <button>
                <svg viewBox="0 0 24 24"
                     width="24" height="24" fill="none">
                    <svg viewBox="0 0 576 512" width="24" height="24" fill="#fff"
                         x="0" y="0" opacity="100%">
                        <path
                            d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"></path>
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
            <button>
                <svg viewBox="0 0 24 20"
                     width="24" height="20" fill="none">
                    <svg viewBox="0 0 512 512" width="20" height="20" fill="#fff"
                         x="2" y="0" opacity="100%">
                        <path
                            d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"></path>
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
        </div>
    );
}