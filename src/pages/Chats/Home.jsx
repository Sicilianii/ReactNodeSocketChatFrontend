
import './Home.css';



export default function Home() {
    return(
        <main className={'main container'}>
            <Search />
            <div className={'main-place__chats'}>
                <YourChats />
                <PlaceChat />
            </div>
        </main>
    );
}