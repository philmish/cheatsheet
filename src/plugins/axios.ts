import axios from "axios";
import config from "../config.json";

const http = axios.create({
    baseURL: `https://raw.githubusercontent.com/PatrickMaul/Cheat-Sheet/${config.branch}`,
});

export default http;
