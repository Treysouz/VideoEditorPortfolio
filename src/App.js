import React, { Component } from "react";
import "./App.css";
import VideoList from "./Assets/JSON/videos.json";
import MainTile from "./Components/MainTile";
import NextTile from "./Components/NextTile";
import PreviewTile from "./Components/PreviewTile";
import PreviousTile from "./Components/PreviousTile";
import Social from "./Components/Social";
import Header from "./Components/Header";
import Module from "./Components/Module";

var videoNames = Object.keys(VideoList.videos);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      previousVideo: "",
      nextVideo: "",
      currentVideo:
        {
         "link":"src/Assets/Videos/Reel.mp4",
         "description":[
            "Editor"
         ],
         "thumbnail":"src/Assets/Thumbnails/Reel.png",
         "name":"Reel"
      },
      otherVideos: [],
      displayModule: false,
      currentTime: "",
      videoDuration: "",
    };
  }
  //If component mounts, call setVideos with the current index as the parameter and set interval to track every second.
  componentDidMount() {
    this.setVideos(this.state.currentIndex);
    setInterval(this.getCurrentTime, 1000);
  }
  // Populate the prev and next button thumbnails based on index and set this.state.otherVideos to an array with the video thumbnails that are left.
  sortVideos = (prev, next) => {
    var sortIndex = next + 1;
    if (sortIndex === videoNames.length) {
      sortIndex = 0;
    }
    var newOtherVideos = [];
    while (sortIndex !== prev) {
      newOtherVideos.push(videoNames[sortIndex]);
      sortIndex++;
      if (sortIndex === videoNames.length) {
        sortIndex = 0;
      }
    }

    this.setState({
      otherVideos: newOtherVideos,
    });
  };
  // Change index based on what video was clicked or if the next/prev buttons are clicked.
  setVideos = (index) => {
    var newNextVideo;
    var newPrevVideo;
    if (index === -1) {
      index = videoNames.length - 1;
    } else if (index === videoNames.length) {
      index = 0;
    }
    if (index === 0) {
      newNextVideo = VideoList.videos[videoNames[index + 1]];
      newPrevVideo = VideoList.videos[videoNames[videoNames.length - 1]];
      this.sortVideos(videoNames.length - 1, index + 1);
    } else if (index === videoNames.length - 1) {
      newNextVideo = VideoList.videos[videoNames[0]];
      newPrevVideo = VideoList.videos[videoNames[index - 1]];
      this.sortVideos(index - 1, 0);
    } else {
      newNextVideo = VideoList.videos[videoNames[index + 1]];
      newPrevVideo = VideoList.videos[videoNames[index - 1]];
      this.sortVideos(index - 1, index + 1);
    }
    this.setState({
      currentIndex: index,
      previousVideo: newPrevVideo,
      nextVideo: newNextVideo,
      currentVideo: VideoList.videos[videoNames[index]],
    });
  };
  //set this.state.displayModule to true and pause video.
  openModule = () => {
    this.setState({
      displayModule: true,
    });
    document.getElementById("currentVideo").pause();
  };
  //set this.state.displayModule to false and play video.
  closeModule = () => {
    this.setState({
      displayModule: false,
    });
    document.getElementById("currentVideo").play();
  };
  //set this.state.currentTime and this.state.videoDuration to the currently viewing videos current time and video duration respectively.
  getCurrentTime = () => {
    this.setState({
      currentTime: document.getElementById("currentVideo").currentTime,
      videoDuration: document.getElementById("currentVideo").duration,
    });
  };

  render() {
    return (
      <main className="grid">
        {/* ----------Main Video Tile---------- */}
        <MainTile
          currentVideo={this.state.currentVideo}
          setVideos={this.setVideos}
          currentIndex={this.state.currentIndex}
        ></MainTile>
        {/* ----------End Main Video Tile---------- */}
        {/* ----------Next Video Tile---------- */}
        <NextTile
          nextVideo={this.state.nextVideo}
          currentIndex={this.state.currentIndex}
          setVideos={this.setVideos}
        ></NextTile>
        {/* ----------End Next Video Tile---------- */}
        {/* ----------Preview Videos Tile---------- */}
        <PreviewTile
          otherVideos={this.state.otherVideos}
          VideoList={VideoList}
          VideoNames={videoNames}
          setVideos={this.setVideos}
        ></PreviewTile>
        {/* ----------End Preview Videos Tile---------- */}
        {/* ----------Previous Video Tile---------- */}
        <PreviousTile
          previousVideo={this.state.previousVideo}
          setVideos={this.setVideos}
          currentIndex={this.state.currentIndex}
        ></PreviousTile>
        {/* ----------End Previous Video Tile---------- */}
        {/* ----------Header---------- */}
        <Header
          currentVideo={this.state.currentVideo}
          openModule={this.openModule}
          currentTime={this.state.currentTime}
          videoDuration={this.state.videoDuration}
        ></Header>
        {/* ----------End Header---------- */}
        {/* ----------Social Links---------- */}
        <Social></Social>
        {/* ----------End Social Links---------- */}
        {/* ----------Module---------- */}
        {this.state.displayModule ? (
          <Module
            currentVideo={this.state.currentVideo}
            closeModule={this.closeModule}
          ></Module>
        ) : null}
        {/* ----------End Module---------- */}
      </main>
    );
  }
}
