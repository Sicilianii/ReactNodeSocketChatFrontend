import './_PhoneCall.scss';

export const PhoneCall = () => {
    return (
        <button className='phone-call'>
            <svg className='phone-call__svg' viewBox="0 0 576 512" width="24" height="24" fill="#fff"
                 x="0" y="0" opacity="100%">
                <path
                    d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"></path>
            </svg>
        </button>
    );
}
