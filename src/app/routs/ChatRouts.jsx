import {Route, Routes} from "react-router-dom";
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