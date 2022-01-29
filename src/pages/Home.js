import React from "react";
// import Button from "../components/Button"
import Widget from "../components/Widget";

class Home extends React.Component {
  state = {
    showComponent: true,
  };

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
    const render = this.renderWidget;
    const close = this.closeWidget;
    // const message='hello'
    return (
      <div className="mainpage">
        <section className="title">
          <h1>Home page of a random website</h1>
          <h2>Test widget Trizzy</h2>
        </section>

        {this.state.showComponent ? (
          <button
            onClick={() => this.closeWidget()}
            type="button"
            className="home-btn"
          >
            <img
              className="home-logo"
              src="/imgs/logo-trizzy.svg"
              alt="logo-trizzy"
            />
          </button>
        ) : (
          <Widget render={render} close={close} />
        )}
        {/* <div><Button onClick={() => this.closeWidget()} type="button"/></div>
                <div><Widget/></div> */}
      </div>
    );
  }
}

export default Home;
