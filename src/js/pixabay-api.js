import axios from "axios";

const limit = 15;

export const getPhoto = async (value, page = 1) => {
    const KEY = "9190280-87e8455cc30411d2efd850bc0";
    const url = await axios.get(`https://pixabay.com/api/`, {
        params: {
            key: KEY,
            q: value,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: limit,
            page,
        }
    });
   
    return url.data;
}