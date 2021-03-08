import axios from 'axios'

const KEY = 'AIzaSyCP7rcnlQw4zI06sDEoOz2G40iZfJpbvKI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})