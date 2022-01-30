import React, { Component } from "react";
import Results from "./Results";
import Searchbar from "./Searchbar";
// import Results from "./Results";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  showResults = () => {
    this.setState({
      showComponent: false,
    });
  };

  hideResults = () => {
    this.setState({
      showComponent: true,
    });
  };

  render() {
    // console.log(this.props);
    const results = this.showResults;
    const hide = this.hideResults;

    return (
      <div className="widget">
        <header className="header-widget">
          <img
            className="panda"
            src="/imgs/panda-trizzy.svg"
            alt="panda trizzy"
          />
          <div className="header-txt">
            <h1>
              Bonjour, <br /> Je suis Trizzy
            </h1>
            <p className="master">Le maître du jeu !</p>
          </div>
          <div className="alt-button">
            <button
              className="close-widget"
              onClick={() => this.props.render()}
              type="button"
            >
              x
            </button>
          </div>
        </header>
        <section className="main-app">
          <h2 className="catch">
            Gagne de l'expérience dans la gestion des déchets, tout en t'amusant
            !
          </h2>
          {this.state.showComponent ? (
            <Searchbar results={results} hide={hide} />
          ) : (
            <Results results={results} hide={hide} />
          )}
        </section>
        <section className="exp">
          <div className="barre master">
            <p className="master">niv 0</p>230/1000
            <p className="master">niv 1</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Widget;
