import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);

  const onFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    console.log(videos);
  };
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit}></SearchBar>
      <VideoList videos={videos}> </VideoList>
    </div>
  );
};

export default App;
