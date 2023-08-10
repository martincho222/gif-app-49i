import axios from 'axios';

const apiKey = "QUcHY08vjDztieAq3R3SGx4pUC1H55Cn";
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=10`;

    const response = await axios.get(url)
    const { data } = response.data;
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return  gifs;
}