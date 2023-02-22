import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchStyles from "./Search.module.css";

interface Props {
    onSearch: (search: string) => void;
}

const Search: React.FC<Props> = ({ onSearch }) => {
    return (
        <div className={SearchStyles.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" placeholder="Search for a country..." onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
};

export default Search;
