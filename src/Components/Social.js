import React, { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <section className="socialLinks gridItem">
        {/* <i className="far fa-id-badge">
          <span>About Me</span>
        </i> */}
        <a
          href="https://www.linkedin.com/in/armstrongjasmine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin">
            <span>LinkedIn</span>
          </i>
        </a>
        <a
          href="https://www.imdb.com/name/nm9132722/?ref_=nv_sr_1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-imdb">
            <span>IMBD</span>
          </i>
        </a>
        <a
          href="https://soundcloud.com/jasmine-armstrong-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-soundcloud">
            <span>Soundcloud</span>
          </i>
        </a>
      </section>
    );
  }
}
