import ApiClient from "./APIClient";
import APIURLs from "./APIUrls";

class PublicController {
  constructor() {
    this.apiClient = new ApiClient(APIURLs.baseURL);
  }

  async getPosts() {
    console.log(APIURLs.posts);
    return this.apiClient
      .post(APIURLs.posts)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
}

export default PublicController;
