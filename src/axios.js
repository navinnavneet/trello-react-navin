import axios from "axios";

const key = "679403bb5ae5ee89ea6ef2d64f9207f6";
const token =
  "ec15f4457724955a4afc89171d768996cacbdbae90d2028be2000b9dbcc68198";

const axiosInstance = axios.create({
  baseURL: "https://api.trello.com/1",
});
axiosInstance.defaults.params = {
  key: key,
  token: token,
};

export default axiosInstance;
