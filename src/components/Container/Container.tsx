import { Link } from "react-router-dom";
import ContainerStyles from "./Container.module.css";

interface Props {
    flag: string;
    name: string;
    population: string;
    region: string;
    capital: string;
}

const Container: React.FC<Props> = ({ flag, name, population, region, capital }) => {
    return (
        <Link to="/post" className={ContainerStyles.container}>
            <div
                className={ContainerStyles.thumb}
                style={{
                    backgroundImage: `url(${flag})`,
                }}
            />
            <article>
                <h2>{name}</h2>
                <ul>
                    <li>
                        <span>Population:</span> {population}
                    </li>
                    <li>
                        <span>Region:</span> {region}
                    </li>
                    <li>
                        <span>Capital:</span> {capital}
                    </li>
                </ul>
            </article>
        </Link>
    );
};
export default Container;
