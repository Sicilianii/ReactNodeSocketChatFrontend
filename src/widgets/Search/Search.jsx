import './Search.css';
import SearchForm from "../../shared/ui/SearchForm/SearchForm";
import MainSelector from "./ui/MainSelector/MainSelector";

export default function Search__widget() {
    return(
        <div className={'search'}>
            <MainSelector />
            <SearchForm />
        </div>
    );
}