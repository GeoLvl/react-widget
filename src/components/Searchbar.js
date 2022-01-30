import React, { Component } from "react";

class Searchbar extends Component {
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

  check = () => {
      console.log("check")
  };

  render() {
    
    return (
      <div className="search">
        <form>
          <div>
            <input
              className="input-search"
              placeholder="quel est ton déchet ?"
            ></input>
            <button className="submit"
            onClick={() => this.props.results()} type="button">Let's play !</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
