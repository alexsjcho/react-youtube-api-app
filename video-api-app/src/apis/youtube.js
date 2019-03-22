import axios from "axios";

const KEY = "AIzaSyDHT4KvQZ68PAeT5bnTshygqegVUuuhon4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
