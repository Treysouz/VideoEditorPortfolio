import React, { Component } from "react";


export default class NextTile extends Component {
  render() {
    return (
      <section className="nextTile gridItem actionTile" onClick={() => this.props.setVideos(this.props.currentIndex + 1)}>
        <div className="overlay">
          <i className="fas fa-step-forward">
            <p>{this.props.nextVideo.name}</p>
          </i>
        </div>
        <img
          alt="Next Video Thumbnail"
          src={this.props.nextVideo.thumbnail}
          key={this.props.nextVideo.thumbnail}
        ></img>
      </section>
    );
  }
}
