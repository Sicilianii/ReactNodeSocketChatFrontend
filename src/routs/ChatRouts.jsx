import {Route, Routes, useParams} from "react-router-dom";
import ListMessages from "../components/PlaceChat/parts/Chat/parts/ListMessages/ListMessages";

export default function ChatRouter() {

    return(
        <Routes>
            <Route path={'/chat/'}>
                <Route path=":chatId" element={ <ListMessages /> } />
            </Route>
        </Routes>
    );
}