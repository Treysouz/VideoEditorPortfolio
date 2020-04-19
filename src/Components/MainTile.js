import React, { Component } from "react";

export default class MainTile extends Component {
  componentDidMount(){
    setInterval(this.props.getCurrentTime, 1000)
  }
  render() {
    return (
      <section className="mainTile gridItem">
        <video id="currentVideo"
          onEnded={() => this.props.setVideos(this.props.currentIndex + 1)}
          autoPlay
          controls
          key={this.props.currentVideo.link}
          poster={this.props.currentVideo.thumbnail}
        >
          <source src={this.props.currentVideo.link}></source>
        </video>
      </section>
    );
  }
}
