import md5 from "md5";
import { characterActions } from "./character-slice";

const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const generateHash = (timeStamp) => {
    return md5(timeStamp + privateKey + publicKey);
};

export const fetchCharacterData = (searchValue = "", parameter = "") => {
    return async (dispatch) => {
        const timeStamp = new Date().getTime();
        const hash = generateHash(timeStamp);
        const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timeStamp}&${parameter}=${searchValue}&limit=100`
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            dispatch(characterActions.setCharacters(data.data.results))
            console.log('data:', data.data.results);
            return data.data.results;
        } catch (error) {
            console.log("error fetching data", error);
        }
    };
};
