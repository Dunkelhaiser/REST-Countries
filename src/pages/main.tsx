import { useEffect, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import Container from "../components/Container/Container";
import Layout from "../components/Layout/Layout";
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
                setPosts(json);
            } catch (err) {
                setError();
            }
        };
        fetchCountries("https://restcountries.com/v3.1/all");
    }, []);

    const countriesList = state.countriesList.sort((a, b) => a.name.common.localeCompare(b.name.common));

    const countries = countriesList.map((country) => (
        <Container
            key={uuid()}
            name={country.name.common}
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
