import React, { Component } from "react";


class Header extends Component {
  state = {
    showComponent: false
  };

  render() {
      return (
        <header className="header-widget">
        <img
          className="panda"
          src="/imgs/panda-trizzy.svg"
          alt="panda trizzy"
        />
        <div className="header-txt">
          <h1>Bonjour, <br/> Je suis Trizzy</h1>
          {/* <p>Lle maître du jeu !</p> */}
        </div>
        <div className="alt-button">
          <button className="close-widget">x</button>
          {/* <button className="close-widget">!</button> */}
        </div>
      </header>
      )
  };
}

export default Header;