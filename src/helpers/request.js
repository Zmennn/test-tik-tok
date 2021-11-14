import axios from "axios";

const options = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/trending/feed",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": "b533a76707msh735f6e573da1187p1e339ajsn7e328424b1ab",
  },
};

export default function request() {
  return axios.request(options);
}
