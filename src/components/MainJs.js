import React, { Component } from "react";
import axios from "axios";
import "./MainCss.css";

export class MainJs extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvices();
  }

  fetchAdvices = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="mainss">
        <div className="card">
          <h1>{this.state.advice}</h1>

          <button className="button" onClick={this.fetchAdvices}>
            <span>GIVE ME ADVICE</span>
          </button>
        </div>
      </div>
    );
  }
}

export default MainJs;
