import axios from "axios";

export default class fetchPosts {
  static async getAll(page = 1, limit = 10) {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
