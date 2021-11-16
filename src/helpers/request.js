import axios from "axios";

// const KEY = "28c722deeemsh470ad567620c99cp111077jsnff65b09c1b79";
const KEY = "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66";

export function request() {
  const options = {
    method: "GET",
    url: "https://tiktok33.p.rapidapi.com/trending/feed",
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": KEY,
    },
  };
  return axios.request(options);
}

export function userRequest(action, name) {
  const options = {
    method: "GET",
    url: `https://tiktok33.p.rapidapi.com/user/${action}/${name}`,
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": KEY,
    },
  };
  return axios.request(options);
}
