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
      currentVideo: "",
      otherVideos: [],
      displayModule: false,
      currentTime: "",
      videoDuration:"",
    };
  }

  componentDidMount() {
    this.setVideos(this.state.currentIndex);
    setInterval(this.getCurrentTime, 1000);
  }

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

  openModule = () => {
    this.setState({
      displayModule: true,
    });
    document.getElementById("currentVideo").pause();
  };

  closeModule = () => {
    this.setState({
      displayModule: false,
    });
    document.getElementById("currentVideo").play();
  };

  getCurrentTime = () => {
    this.setState({
      currentTime: document.getElementById("currentVideo").currentTime,
      videoDuration:  document.getElementById("currentVideo").duration
    });
  };

  render() {
    return (
      <main className="grid">
        <MainTile
          currentVideo={this.state.currentVideo}
          setVideos={this.setVideos}
          currentIndex={this.state.currentIndex}
        ></MainTile>
        <NextTile
          nextVideo={this.state.nextVideo}
          currentIndex={this.state.currentIndex}
          setVideos={this.setVideos}
        ></NextTile>
        <PreviewTile
          otherVideos={this.state.otherVideos}
          VideoList={VideoList}
          VideoNames={videoNames}
          setVideos={this.setVideos}
        ></PreviewTile>
        <PreviousTile
          previousVideo={this.state.previousVideo}
          setVideos={this.setVideos}
          currentIndex={this.state.currentIndex}
        ></PreviousTile>
        <Header
          currentVideo={this.state.currentVideo}
          openModule={this.openModule}
          currentTime={this.state.currentTime}
          videoDuration={this.state.videoDuration}
        ></Header>
        <Social></Social>
        {this.state.displayModule ? (
          <Module
            currentVideo={this.state.currentVideo}
            closeModule={this.closeModule}
          ></Module>
        ) : null}
      </main>
    );
  }
}
