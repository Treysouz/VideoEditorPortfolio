import React, { Component } from "react";

export default class PreviousTile extends Component {
  render() {
    return (
      <section
        className="previousTile gridItem actionTile"
        onClick={() => this.props.setVideos(this.props.currentIndex - 1)}
      >
        <div className="overlay">
          <i className="fas fa-step-backward">
          <p>{this.props.previousVideo.name}</p>
          </i>
        </div>
        <img
          alt="Previous Video Thumbnail"
          src={this.props.previousVideo.thumbnail}
          key={this.props.previousVideo.thumbnail}
        ></img>
      </section>
    );
  }
}
