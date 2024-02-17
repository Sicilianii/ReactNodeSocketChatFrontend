import {Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home";
import GetStarted from "../pages/getStarted/getStarted";
import NotFound from "../pages/e404/NotFound";


export default function MainRouter() {

    return(
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/getStarted" element={ <GetStarted /> } index={true} />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    );
}