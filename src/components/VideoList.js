import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const listOfVideos = props.videos.map((video, id) => {
    return (
      <VideoItem onVideoSelect={props.onSelectVideo} key={id} video={video} />
    );
  });

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
