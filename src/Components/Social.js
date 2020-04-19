import React, { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <section className="socialLinks gridItem">
        <i className="far fa-id-badge">
          <span>About Me</span>
        </i>
        <i className="fab fa-linkedin">
          <span>LinkedIn</span>
        </i>
        <i className="fab fa-imdb">
          <span>IMBD</span>
        </i>
        <i className="fab fa-soundcloud">
          <span>Soundcloud</span>
        </i>
      </section>
    );
  }
}
