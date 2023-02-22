import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";

function Country() {
    return (
        <Layout className="country">
            <Button />
            <section>
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/510px-Flag_of_Germany.svg.png"
                    alt="Flag"
                />
                <article>
                    <h2>Germany</h2>
                    <div>
                        <ul>
                            <li>
                                <span>Native Name: </span>Deutschland
                            </li>
                            <li>
                                <span>Population: </span>81,770,900
                            </li>
                            <li>
                                <span>Region: </span>Europe
                            </li>
                            <li>
                                <span>Sub Region: </span>Central Europe
                            </li>
                            <li>
                                <span>Capital: </span>Berlin
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Top Level Domain: </span>.de
                            </li>
                            <li>
                                <span>Currency: </span>Euro
                            </li>
                            <li>
                                <span>Languages: </span>German
                            </li>
                        </ul>
                    </div>
                    <aside>
                        <span>Border Countries: </span>
                        <Link to="/">France</Link>
                        <Link to="/">Belgium</Link>
                        <Link to="/">Netherlands</Link>
                        <Link to="/">Poland</Link>
                    </aside>
                </article>
            </section>
        </Layout>
    );
}

export default Country;
