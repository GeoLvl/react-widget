import React, { Component } from "react";
import Message from "./Message";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
      showMessage: false,
    };
  }

  callMessage = () => {
      console.log("merci")
    this.setState({
      showMessage: true,
    });
    // this.props.hide()
  };

  render() {
    console.log(this.props);
    return (
        <>
      <section className="results">
        <div>
          <h2 className="blue">
            <img src="/imgs/battery.png" alt="battery-icon" />
            PILES & BATTERIES
          </h2>
          <h4 className="results-infos ">
            Déchets d'Equipements Electriques et Electroniques
          </h4>
          <hr className="blue" />
          <br />
          <div className="test">
            <p>
              Les piles et autres accumulateurs usagés se recyclent dans des
              points de collecte : distribution, déchèterie.
              <br />
              <a
                className="links blue"
                href="https://trizzy.io/"
                target="_blank"
                rel="noreferrer"
              >
                En savoir plus
              </a>
            </p>
            <br />
            {this.state.showMessage ? <Message /> :
            <div className="grp-button">
              <button className="small-btn"><a href="https://www.google.fr/maps/search/recyclerie+bordeaux/@44.8382935,-0.5822543,12z/data=!3m1!4b1"
                target="_blank"
                rel="noreferrer">Où ?</a></button>
              <button className="small-btn" onClick={() => this.callMessage()}>Je recycle !
              </button>
            </div>}
          </div>
        </div>
        <button
          className="submit"
          onClick={() => this.props.hide()}
          type="button"
        >
          Play again !
        </button>
      </section>
      </>
    );
  }
}

export default Results;
