import { useEffect, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import Container from "../components/Container/Container";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import Navigation from "../components/Navigation/Navigation";
import Search from "../components/Search/Search";
import Select from "../components/Select/Select";
import { countriesReducer, Country, init } from "../reducers/fetchReducer";

function Main() {
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");
    const [state, dispatch] = useReducer(countriesReducer, init);

    useEffect(() => {
        const setPosts = (posts: Country[]) => {
            dispatch({ type: "success", payload: posts });
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
                setPosts(json);
            } catch (err) {
                setError();
            }
        };
        fetchCountries("https://restcountries.com/v2/all");
    }, []);

    const { countriesList, error, loading } = state;

    const countries = countriesList
        ?.sort((a, b) => a.name.localeCompare(b.name))
        ?.map((country) => (
            <Container
                key={uuid()}
                name={country.name}
                population={country.population.toLocaleString(undefined)}
                region={country.region}
                capital={country.capital}
                flag={country.flags.svg}
            />
        ));

    return (
        <Layout className="main">
            <Navigation>
                <Search onSearch={(searchValue) => setSearch(searchValue)} />
                <Select options={["Africa", "Americas", "Asia", "Europe", "Oceania"]} onSelect={(region) => setFilter(region)} />
            </Navigation>
            {error && <h2>Error</h2>}
            {loading && <Loader />}
            {filter === "" || filter === "Filter by Region"
                ? search === ""
                    ? countries
                    : countries.filter((country) => country.props.name.toLowerCase().includes(search.toLowerCase()))
                : countries
                      .filter((country) => country.props.region === filter)
                      .filter((country) => country.props.name.toLowerCase().includes(search.toLowerCase()))}
        </Layout>
    );
}

export default Main;
