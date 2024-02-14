import {Route, Routes, useParams} from "react-router-dom";
import ListMessages from "../components/PlaceChat/parts/Chat/parts/ListMessages/ListMessages";
import Chat from "../components/PlaceChat/parts/Chat/Chat";

export default function ChatRouter() {

    return(
        <Routes>
            <Route path={'/chat/'}>
                <Route path=":chatId" element={ <Chat /> } />
            </Route>
        </Routes>
    );
}