import React from "react";
import OutputList from "./components/OutputList/OutputList";
import UserInput from "./components/UserInput/UserInput";
import Countries from "./components/Countries";
import "./App.css";

class App extends React.Component {
  state = {
    suggestions: [],
    text: ""
  };

  typeCountryHandler = event => {
    const value = event.target.value;
    let suggestions = [];
    if (value) {
      const regex = new RegExp(`^${value}`, "i"); // i to ignore case
      suggestions = Countries.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({
      suggestions,
      text: value
    }));
  };
  render() {
    return (
      <div className="App">
        <div className="intro">
          <h1>Text Prediction!</h1>
          <p>
            This is one of my first projects in Reactjs. There is a predifined
            object with the countries names and flags. All you have to do is
            type in a country name and it will look it up for you refreshing the
            DOM in real time.
          </p>
          <p>
            I used React, Regular Expressions and Flex box for the CSS Styling.
          </p>
          <div>
            <h3>FIND ME</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://twitter.com/micael_sosa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/mikesosa?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/mike-sosa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="form">
          <h2>Type in a Country</h2>
          <UserInput inputChange={this.typeCountryHandler} />
          <OutputList suggestionsList={this.state.suggestions} />
        </div>
      </div>
    );
  }
}

export default App;
