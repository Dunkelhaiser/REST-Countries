import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import HeaderStyles from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <header className={HeaderStyles.header}>
            <h1>Where in the world?</h1>
            <button type="button">
                <FontAwesomeIcon icon={faMoon} />
                Dark Mode
            </button>
        </header>
    );
};
export default Header;
