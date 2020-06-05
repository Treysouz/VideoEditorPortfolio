import React, { Component } from "react";

export default class Module extends Component {
 
  render() {
    return (
      <section className="moduleContainer">
        <div className="moduleBackground" onClick={this.props.closeModule}></div>
        <div className="module">

          <h2>{this.props.currentVideo.name}</h2>
          <ul>
            {this.props.currentVideo.description.map((role)=> <li key={role}>{role}</li>)}
          </ul>
          <i className="far fa-times-circle" onClick={this.props.closeModule}></i>
        </div>
      </section>
    );
  }
}
