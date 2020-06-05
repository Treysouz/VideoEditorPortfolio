import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="header gridItem">
        <div className="projectInfoContainer">
          <h2>{this.props.currentVideo.name} </h2>
          <span className="videoTime">
            {this.props.currentTime
              ? Math.floor(this.props.currentTime / 60) +
                ":" +
                ("0" + Math.floor(this.props.currentTime % 60)).slice(-2)
              : "0:00"}
            &nbsp;<span className="timeDivide">/</span>&nbsp;
            {this.props.videoDuration
              ? Math.floor(this.props.videoDuration / 60) +
                ":" +
                ("0" + Math.floor(this.props.videoDuration % 60)).slice(-2)
              : "0:00"}
          </span>
          <i className="fas fa-info-circle" onClick={this.props.openModule}>
            <span>&nbsp;Project Information</span>
          </i>
        </div>

        <h1>Jasmine Armstrong <i className="fas fa-fist-raised"></i></h1>
      </section>
    );
  }
}
