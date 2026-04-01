import { Cache } from "./pokecache.js";


export type ShallowLocations = {
    "count": number,
    "next": string | null,
    "previous": string | null,
    "results": { "name": string, "url": string}[],
};

export type Location = {
    "name": string;
    "url": string;
    "pokemon_encounters": {
        pokemon: {
            name: string;
            url: string;
        };
    }[];
};

export type PokemonList = {
    "pokemonList": string[];
};

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor(cacheInterval: number) {
        this.cache = new Cache(cacheInterval);
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
            let URL = PokeAPI.baseURL + "/location-area/";
        if (pageURL) {
            URL = pageURL
        };
        const cached = this.cache.get<ShallowLocations>(URL);

        if (cached) {
            return cached;
        };
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            };
            const data: ShallowLocations = await response.json();
            console.log(data)
            this.cache.add(URL, data);
            return data;

        } catch(err) {
            console.log(err);
            throw err;
        };
    }

    async fetchLocation(locationName: string): Promise<Location> {
        let URL = `${PokeAPI.baseURL}/location-area/${locationName}`
        
        const cached = this.cache.get<Location>(URL);
        if (cached) {
            return cached;
        };

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            };
            const data: Location = await response.json();
            this.cache.add(URL, data);
            return data;

        } catch (err) {
            console.log(err);
            throw err;
        }
    };

};



