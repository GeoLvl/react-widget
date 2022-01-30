import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    showComponent: false,
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
            onClick={() => this.check()} type="button">let's play !</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
