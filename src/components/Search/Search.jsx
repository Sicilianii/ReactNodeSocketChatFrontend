import './Search.css';
import SearchForm from "./parts/SearchForm/SearchForm";
import MainSelector from "./parts/MainSelector/MainSelector";

export default function Search() {
    return(
        <div className={'search'}>
            <MainSelector />
            <SearchForm />
        </div>
    );
}