import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://jambo-burger-default-rtdb.asia-southeast1.firebasedatabase.app/",
});
export default instance;
