import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <main className="grid">
        <section className="name gridItem">
          <h1>Jasmine Armstrong</h1>
        </section>
        <section className="nextButton gridItem actionTile">
          <div className="overlay">
            <i className="fas fa-step-forward">
              <p>Next Video</p>
            </i>
          </div>
        </section>
        <section className="mainTile gridItem actionTile"></section>
        <section className="previewVideos gridItem actionTile">
          <div className="overlay"></div>
        </section>
        <section className="previousButton gridItem actionTile">
          <div className="overlay">
            <i className="fas fa-step-backward">
              <p>Previous Video</p>
            </i>
          </div>
        </section>
        <section className="socialLinks gridItem">
          <i className="far fa-id-badge">
            <span>About Me</span>
          </i>
          <i className="fab fa-linkedin">
            <span>LinkedIn</span>
          </i>
        </section>
        <section className="socialLinks gridItem">
          <i className="fab fa-imdb">
            <span>IMBD</span>
          </i>
          <i className="fab fa-soundcloud">
            <span>Soundcloud</span>
          </i>
        </section>
      </main>
    );
  }
}
