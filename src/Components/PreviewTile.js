import React, { Component } from "react";

export default class PreviewTile extends Component {
  render() {
    return (
      <section className="previewTile gridItem">
        {this.props.otherVideos.map((name) => (
          <div className="thumbnailContainer" key={name}>
            <div
              className="overlay"
              onClick={() =>
                this.props.setVideos(this.props.VideoNames.indexOf(name))
              }
            ><h2>{name}</h2></div>
            <img
              className="actionTile"
              alt={name}
              src={this.props.VideoList.videos[name].thumbnail}
              key={this.props.VideoList.videos[name].thumbnail}
            ></img>
          </div>
        ))}
      </section>
    );
  }
}
