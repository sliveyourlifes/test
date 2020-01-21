import axios from 'axios';

// const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random?';
const TRENDING_URL = 'http://api.giphy.com/v1/gifs/trending?';
// const SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '3whiADS5q2I87ugJpVmZqjPraaI11u5a';
const limitValue = 6;

const api = {
    trending: () => {
        return fetch(`${TRENDING_URL}api_key=${API_KEY}&limit=${limitValue}`);
        // axios({
        //     method:'GET',
        //     url: `${TRENDING_URL}api_key=${API_KEY}&limit=${limitValue}`,
        //     responseType: 'json',
        // }).then(res => {
        //     console.log(res);
        //     return res;
        // })
        // .catch(error => {
        //     console.log(error.message)
        //     return error.message;
        // }) 
        // .finally(()=> console.log('request is finished'))
    }
    // trending: async () => {
    //     try{
    //         const response = await axios({
    //             method: 'GET',
    //             url: `${TRENDING_URL}api_key=${API_KEY}&limit=${limitValue}`,
    //             responseType: 'json',
    //         })
    //         console.log(response);
    //         return response;
    //     } catch( error ) {
    //         console.error(error);
    //         return error.message;
    //     }
    // }
}

export default api;