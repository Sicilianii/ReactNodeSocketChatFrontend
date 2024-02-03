import Search from "../../components/Search/Search";
import YourChats from "../../components/YourChats/YourChats";
import PlaceChat from "../../components/PlaceChat/PlaceChat";
import './home.css';



export default function Home() {
    return(
        <>
            <Search />
            <div>
                <YourChats />
                <PlaceChat />
            </div>
        </>
    );
}