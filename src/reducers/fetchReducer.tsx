export interface Country {
    name: { common: string; official: string; nativeName: string };
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    topLevelDomain: string;
    currency: string;
    languages: string[];
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
    post: null as null | Country,
    error: false,
};

type ReducerPostActions = { type: "fetch" } | { type: "success"; payload: Country } | { type: "error" };

export const countryReducer = (state: typeof initCountry, action: ReducerPostActions) => {
    switch (action.type) {
        case "fetch":
            return {
                loading: true,
                error: false,
                post: null,
            };
        case "success":
            return {
                loading: false,
                error: false,
                post: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: true,
                post: null,
            };
        default:
            return state;
    }
};
