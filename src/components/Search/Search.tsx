import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchStyles from "./Search.module.css";

const Search: React.FC = () => {
    return (
        <div className={SearchStyles.search}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="search" placeholder="Search for a country..." />
        </div>
    );
};

export default Search;
