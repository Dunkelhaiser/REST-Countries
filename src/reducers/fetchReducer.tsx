export interface Country {
    borders: string[];
    name: { common: string; official: string };
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: { name: string }[];
    languages: { name: string }[];
    flags: { png: string; svg: string };
}

export const init = {
    loading: false,
    countriesList: [] as Country[],
    error: false,
};

type ReducerActions = { type: "fetch" } | { type: "success"; payload: Country[] } | { type: "error" };

export const countriesReducer = (state: typeof init, action: ReducerActions) => {
    switch (action.type) {
        case "fetch":
            return {
                loading: true,
                error: false,
                countriesList: [],
            };
        case "success":
            return {
                loading: false,
                error: false,
                countriesList: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: true,
                countriesList: [],
            };
        default:
            return state;
    }
};

export const initCountry = {
    loading: false,
    country: null as null | Country,
    error: false,
};

type ReducerCountryActions = { type: "fetch" } | { type: "success"; payload: Country } | { type: "error" };

export const countryReducer = (state: typeof initCountry, action: ReducerCountryActions) => {
    switch (action.type) {
        case "fetch":
            return {
                loading: true,
                error: false,
                country: null,
            };
        case "success":
            return {
                loading: false,
                error: false,
                country: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: true,
                country: null,
            };
        default:
            return state;
    }
};
