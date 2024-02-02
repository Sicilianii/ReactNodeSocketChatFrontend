import './getStarted.css';

export default function  GetStarted() {
    return(
        <div className={'bar container'}>
            <div className={'left-bar'}>
                <span className={'left-bar__heading'}>Welcome to CommuniHub!</span>
                <h1 className={'left-bar__h1'}>Discover your</h1>
                <p className={'left-bar__des'}>Find out what topics you find interesting, learn new skills, and connect with like-minded individuals.</p>
                <button className={'left-bar__button'}>Get Started</button>
            </div>
            <div>
                <img src="../../../public/illustration-concept.png" alt="" width={512} height={512}/>
            </div>
        </div>
    );
}