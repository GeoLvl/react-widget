import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Header from "./Header";

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  renderWidget = () => {
    this.setState({
      showComponent: true,
    });
  };

  closeWidget = () => {
    this.setState({
      showComponent: false,
    });
  };

  render() {
    console.log(this.props);
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
            <p>Le maître du jeu !</p>
          </div>
          <div className="alt-button">
            <button
              className="close-widget"
              onClick={() => this.props.render()}
              type="button"
            >
              x
            </button>
            {/* <button className="close-widget">!</button> */}
          </div>
        </header>

        {/* {this.state.showComponent ? <Header /> : null}
        <button onClick={() => this.closeWidget()} type="button">
          hide
        </button>
        <button onClick={() => this.renderWidget()} type="button">
          pop
        </button> */}
        <section className="main-app">
          <h2 className="catch">
            Je t'aider à prendre de l'expérience dans la gestion des déchets,
            tout en s'amusant !
          </h2>
          <Searchbar />
        </section>
      </div>
    );
  }
}

export default Widget;
