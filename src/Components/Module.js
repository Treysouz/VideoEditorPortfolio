import React, { Component } from "react";

export default class Module extends Component {
  render() {
    return (
      <section className="moduleContainer">
        <div className="moduleBackground" onClick={this.props.closeModule}></div>
        <div className="module">
          <i className="far fa-times-circle" onClick={this.props.closeModule}></i>
          <h2>{this.props.currentVideo.name}</h2>
          <p>{this.props.currentVideo.description}</p>
        </div>
      </section>
    );
  }
}
