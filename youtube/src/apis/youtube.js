import axios from 'axios';

const KEY = 'AIzaSyDfmM2G2zUBye1yQJjrl6iTgcqI4mdNrrY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});