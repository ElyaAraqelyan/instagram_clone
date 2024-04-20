import axios from "axios";

export default class fetchPhotos {
    static async getAll(page=1, limit=10){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: limit,
                    
                    _page: page
                }
            })
            return res.data
        } catch (error) {
            console.log(error);
        }
    }
}