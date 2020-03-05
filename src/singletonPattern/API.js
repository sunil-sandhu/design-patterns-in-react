class API {
  async getData(data) {
    console.log("fetching data from website API for", data);

    const response = {
      status: 200,
      data: {
        message: "Hey friend!"
      }
    };

    if (response.status === 200) {
      return response;
    } else {
      return "error";
    }
  }
  async postData(data) {
    console.log("posting data to website for", data);
    return true;
  }
}

export const api = new API();
