import React, { Component } from "react";
import "./App.css";
import VideoList from "./Assets/JSON/videos.json";

var videoNames = Object.keys(VideoList.videos);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      previousVideo: "",
      nextVideo: "",
      currentVideo: "",
    };
  }

  componentDidMount() {
    this.setVideos(this.state.currentIndex);
   
  }

  setVideos = (index) => {
    var newNextVideo;
    var newPrevVideo;
    console.log(index);
    if (index === -1) {
      index = videoNames.length - 1;
    } else if (index === videoNames.length) {
      index = 0;
    } 
    if (index === 0) {
      newNextVideo = VideoList.videos[videoNames[index+1]];
      newPrevVideo = VideoList.videos[videoNames[videoNames.length - 1]];
    } else if (index === videoNames.length - 1) {
      newNextVideo = VideoList.videos[videoNames[0]];
      newPrevVideo = VideoList.videos[videoNames[index-1]];
    } else {
      newNextVideo = VideoList.videos[videoNames[index+1]];
      newPrevVideo = VideoList.videos[videoNames[index-1]];
    }
    this.setState({
      currentIndex: index,
      previousVideo: newPrevVideo,
      nextVideo: newNextVideo,
      currentVideo: VideoList.videos[videoNames[index]]
    });
    
  };
  render() {
    return (
      <main className="grid">
        <section className="name gridItem">
          <h1>Jasmine Armstrong</h1>
        </section>
        <section className="nextButton gridItem actionTile" onClick={()=>this.setVideos(this.state.currentIndex+1)}>
          <div className="overlay">
            <i className="fas fa-step-forward">
              <p>Next Video</p>
            </i>
          </div>
          <img alt="Next Video Thumbnail" src={this.state.nextVideo.thumbnail}></img>
        </section>
        <section className="mainTile gridItem actionTile">
          <iframe title="currentVideo" src={this.state.currentVideo.link} frameBorder="0"> 

          </iframe>
        </section>
        <section className="previewVideos gridItem actionTile" >
          <div className="overlay"></div>
        </section>
        <section className="previousButton gridItem actionTile" onClick={()=>this.setVideos(this.state.currentIndex-1)}>
          <div className="overlay">
            <i className="fas fa-step-backward">
              <p>Previous Video</p>
            </i>
          </div>
          <img alt="Previous Video Thumbnail" src={this.state.previousVideo.thumbnail}></img>
        </section>
        <section className="socialLinks gridItem">
          <i className="far fa-id-badge">
            <span>About Me</span>
          </i>
          <i className="fab fa-linkedin">
            <span>LinkedIn</span>
          </i>
        </section>
        <section className="socialLinks gridItem">
          <i className="fab fa-imdb">
            <span>IMBD</span>
          </i>
          <i className="fab fa-soundcloud">
            <span>Soundcloud</span>
          </i>
        </section>
      </main>
    );
  }
}
