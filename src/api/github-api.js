import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/users/";

export const fetchHithubUserByNick = async (userNick) => {
  const response = await axios.get(`${userNick}`);
  return response.data;
};

//`https://api.github.com/users/${username}`
