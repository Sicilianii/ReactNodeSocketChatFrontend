import './ToolButtons.css';

export default function ToolButtons() {
    return(
        <div className={'bottom__bar-btns'}>
            <div className={'tools'}>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 448 512" width="20" height="20" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M416 416h-25.81L253.1 52.76c-4.688-12.47-16.57-20.76-29.91-20.76s-25.34 8.289-30.02 20.76L57.81 416H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32s-14.33-32-32-32H126.2l17.1-48h159.6l17.1 48H320c-17.67 0-32 14.31-32 32s14.33 32 32 32h96c17.67 0 32-14.31 32-32S433.7 416 416 416zM168.2 304L224 155.1l55.82 148.9H168.2z"></path>
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 448 512" width="20" height="20" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"></path>
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 640 512" width="20" height="20" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"></path>
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 384 512" width="20" height="20" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M192 352c53.03 0 96-42.97 96-96v-160c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z"></path>
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 576 512" width="20" height="20" fill="#fff"
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
                <button className={'tools-btn'}>
                    <svg viewBox="0 0 20 20"
                         width="20" height="20" fill="none">
                        <svg viewBox="0 0 512 512" width="20" height="20" fill="#fff"
                             x="0" y="0" opacity="100%">
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"></path>
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
                                <feBlend mode="normal" in2="bg-fix"
                                         result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                                <feBlend in="SourceGraphic" in2="bg-fix-filter_dshadow_0_0_0_00000014"
                                         result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </button>
            </div>
            <button type={'submit'} className={'tools-btn'}>
                <svg viewBox="0 0 20 20"
                     width="20" height="20" fill="none">
                    <svg viewBox="0 0 512 512" width="20" height="20" fill="#fff"
                         x="0" y="0" opacity="100%">
                        <path
                            d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
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