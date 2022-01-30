import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  render() {
    console.log(this.props);
    return (
      <section className="results">
        <div>
          <h2>Les piles</h2>
          <h4 className="results-infos">Déchets d'Equipements Electriques et Electroniques</h4>
          <br/>
          <div className="test">
          <p>
          Il faut apporter les piles et accumulateurs usagés à un point de collecte : distribution, déchèterie.  
          </p>
          <br/>
          

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
    );
  }
}

export default Results;
