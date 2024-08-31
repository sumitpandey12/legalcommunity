import ApiClient from "./APIClient";
import APIURLs from "./APIUrls";

class UserContoller {
  constructor() {
    this.apiClient = new ApiClient(APIURLs.baseURL);
    this.token = localStorage.getItem("user");
  }

  async getUserProfile() {
    const user = JSON.parse(this.token);
    const newToken = user.token;
    console.log(newToken);

    return this.apiClient
      .post(APIURLs.profile, {}, { token: newToken })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  applyForExpert() {
    this.apiClient
      .get(APIURLs.applyExpert, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  votePost(vote) {
    this.apiClient
      .post(APIURLs.votePost, vote, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  commentPost(comment) {
    this.apiClient
      .post(APIURLs.commentPost, comment, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  //File upload pending - not done
  raiseQuery(query) {
    this.apiClient
      .post(APIURLs.raiseQuery, query, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  reportUser(report) {
    this.apiClient
      .post(APIURLs.reportUser, report, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  reportQuery(report) {
    this.apiClient
      .post(APIURLs.reportQuery, report, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  followUnfollow(friend) {
    this.apiClient
      .post(APIURLs.followUnfollow, friend, { "x-access-token": "" })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  getFriends() {
    this.apiClient
      .post(APIURLs.friends, {}, { "x-access-token": "" })
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

export default UserContoller;
