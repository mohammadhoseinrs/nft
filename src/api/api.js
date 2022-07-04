import axios from "axios";

export default axios.create({
    baseURL: `https://89.106.206.205/`,
    headers: {
      'content-type': 'application/json'
    }
  });