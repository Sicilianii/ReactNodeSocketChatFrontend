import './Search.css';
import SearchForm from "./parts/SearchForm/SearchForm";

export default function Search() {
    return(
        <div className={'flex justify-between'}>
            <span>CommuniHub</span>
            <SearchForm />
        </div>
    );
}