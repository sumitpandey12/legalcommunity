class UserContoller {
  constructor() {
    this.apiClient = new ApiClient("https://api.example.com");
  }

  getUser() {
    this.apiClient
      .get("users/1")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default UserContoller;
