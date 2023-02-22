import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ButtonStyles from "./Button.module.css";

const Button: React.FC = () => {
    return (
        <Link to="/">
            <button type="button" className={ButtonStyles.button}>
                <FontAwesomeIcon icon={faArrowLeftLong} /> Back
            </button>
        </Link>
    );
};

export default Button;
