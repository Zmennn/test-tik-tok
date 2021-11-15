import axios from "axios";

const KEY = "28c722deeemsh470ad567620c99cp111077jsnff65b09c1b79";

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

// const options = {
//   method: 'GET',                              info
//   url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
//   headers: {
//     'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
//     'x-rapidapi-key': '28c722deeemsh470ad567620c99cp111077jsnff65b09c1b79'
//   }
// };
