import './SearchForm.css';

export default function SearchForm() {
    return (
        <form>
            <input type="text" id={'search'}/>
            <label htmlFor="search">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 16 16" width="16" height="16" fill="none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="#fff"
                         x="0" y="0" opacity="100%">
                        <path
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
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
            </label>
        </form>
    );
}