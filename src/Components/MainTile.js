import React, { Component } from "react";

export default class MainTile extends Component {
  render() {
    return (
      <section className="mainTile gridItem">
        <video
          id="currentVideo"
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
