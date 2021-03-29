import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID fNwRU3hW68ypPnnnFy3RzgmVUem65LBuFQXmNkIju9w"
    }
});