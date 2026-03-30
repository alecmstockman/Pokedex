

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let URL = PokeAPI.baseURL + "/location-area/";
        if (pageURL) {
            URL = pageURL
        };

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            };
            
            const data: ShallowLocations = await response.json();
            return data;
        } catch(err) {
            console.log(err);
            throw err;
        };
    }

    async fetchLocation(locationName: string): Promise<Location> {
        let URL = `${PokeAPI.baseURL}/location-area/${locationName}`
        
        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            };

            const data: Location = await response.json();
            return data
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
}

export type ShallowLocations = {
    "count": number,
    "next": string | null,
    "previous": string | null,
    "results": { "name": string, "url": string}[],
};

export type Location = {
    "name": string;
    "url": string;
};