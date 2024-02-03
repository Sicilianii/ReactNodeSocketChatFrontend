import Search from "../../components/Search/Search";
import YourChats from "../../components/YourChats/YourChats";
import PlaceChat from "../../components/PlaceChat/PlaceChat";
import './Home.css';



export default function Home() {
    return(
        <main className={'main container'}>
            <Search />
            <div>
                <YourChats />
                <PlaceChat />
            </div>
        </main>
    );
}