import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import ButtonStyles from "./Button.module.css";

const Button: React.FC = () => {
    return (
        <button type="button" className={ButtonStyles.button}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
        </button>
    );
};

export default Button;
