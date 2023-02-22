import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import HeaderStyles from "./Header.module.css";
import { ThemeContext } from "../../store/themeContext";

const Header: React.FC = () => {
    const { setThemeHandler } = useContext(ThemeContext);
    return (
        <header className={HeaderStyles.header}>
            <h1>Where in the world?</h1>
            <button type="button" onClick={setThemeHandler}>
                <FontAwesomeIcon icon={faMoon} />
                Dark Mode
            </button>
        </header>
    );
};
export default Header;
