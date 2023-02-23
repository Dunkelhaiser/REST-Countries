import { useEffect, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import { Country, countryReducer, initCountry } from "../reducers/fetchReducer";

function CountryPage() {
    const params = useParams();
    const [state, dispatch] = useReducer(countryReducer, initCountry);
    const [borderCountries, setBorderCountries] = useState<Country[][]>([]);
    useEffect(() => {
        const setPost = (country: Country) => {
            dispatch({ type: "success", payload: country });
        };
        const setError = () => {
            dispatch({ type: "error" });
        };
        const fetchCountries = async (url: string) => {
            dispatch({ type: "fetch" });
            try {
                const response = await fetch(url);
                const json = await response.json();
                if (!response.ok) {
                    throw new Error();
                }
                setPost(json[0]);
            } catch (err) {
                setError();
            }
        };
        fetchCountries(`https://restcountries.com/v2/name/${params.id}`);
    }, [params.id]);

    useEffect(() => {
        const fetchBorderCountries = async (borderCodes: string[]) => {
            const borderCountriesData = await Promise.all(
                borderCodes.map((code) => fetch(`https://restcountries.com/v2/alpha?codes=${code}`).then((response) => response.json()))
            );
            setBorderCountries(borderCountriesData);
        };

        if (state.country?.borders) {
            fetchBorderCountries(state.country.borders);
        }
    }, [state.country]);

    const { country, error, loading } = state;

    return (
        <Layout className="country">
            <Button />
            {error && <h2>Error</h2>}
            {loading && <Loader />}
            {!error && !loading && (
                <section>
                    <img src={country?.flags.svg} alt="Flag" />
                    <article>
                        <h2>{country?.name}</h2>
                        <div>
                            <ul>
                                <li>
                                    <span>Native Name: </span>
                                    {country?.nativeName}
                                </li>
                                <li>
                                    <span>Population: </span>
                                    {country?.population.toLocaleString(undefined)}
                                </li>
                                <li>
                                    <span>Region: </span>
                                    {country?.region}
                                </li>
                                <li>
                                    <span>Sub Region: </span>
                                    {country?.subregion}
                                </li>
                                <li>
                                    <span>Capital: </span>
                                    {country?.capital}
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Top Level Domain: </span>
                                    {country?.topLevelDomain[0]}
                                </li>
                                <li>
                                    <span>Currency: </span>
                                    {country?.currencies[0].name}
                                </li>
                                <li>
                                    <span>Languages: </span>
                                    {country?.languages.map((lang, index) => {
                                        return (
                                            <span key={v4()}>
                                                {lang.name}
                                                {index !== country.languages.length - 1 && ", "}
                                            </span>
                                        );
                                    })}
                                </li>
                            </ul>
                        </div>
                        {country?.borders && (
                            <aside>
                                <span>Border Countries: </span>
                                {borderCountries.map((borderCountry) => (
                                    <Link key={v4()} to={`/${borderCountry[0].name}`}>
                                        {borderCountry[0].name}
                                    </Link>
                                ))}
                            </aside>
                        )}
                    </article>
                </section>
            )}
        </Layout>
    );
}

export default CountryPage;
