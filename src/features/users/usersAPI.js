import axios from "axios";

export default class fetchUsers{
    static async getAll(){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
}