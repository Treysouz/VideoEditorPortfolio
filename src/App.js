import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <main>
        <section className="grid">
          <div className="name grid-item">Jasmine Armstrong</div>
          <div className="next grid-item">next</div>
          <div className="bigScreen grid-item">video</div>
          <div className="grid-item"> buffer</div>
          <div className="grid-item"> buffer</div>
          <div className="grid-item"> buffer</div>
          <div className="previous grid-item">previous</div>
          <div className="social grid-item">social</div>
          <div className="social grid-item">social</div>
        </section>
      </main>
    );
  }
}
