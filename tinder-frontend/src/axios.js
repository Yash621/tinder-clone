import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder17381.herokuapp.com/",
});
export default instance;
