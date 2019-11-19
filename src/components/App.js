import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit("furby");
  }, []);

  const onFormSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
    console.log(video.snippet.title);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit}></SearchBar>
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect}></VideoList>
    </div>
  );
};

export default App;
