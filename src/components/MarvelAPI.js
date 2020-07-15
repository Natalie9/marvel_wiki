import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'fb5ada48224fc36c13980f1bdfb55ace';

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                console.log(comics)
                callback(comics.data.data.results);
            }
        })
    },
    getAllCharapters: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'characters?apikey=' + apiKey + '&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics.data.data.results);
            }
        })
    },
    getAllStories: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'series?apikey=' + apiKey +'&limit=' + limit;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                console.log(comics)
                callback(comics);
            }
        })
    }
}