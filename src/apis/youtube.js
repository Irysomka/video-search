import axios from "axios";

const KEY = "AIzaSyA-0JeI43bJ4fMV3AoRzMglyc9oVO8JIZM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
