import React from "react";



class Message extends React.Component {
  state = {
    showComponent: true,
  };

  

  render() {
    
    return (
      <div >
      <img src="/imgs/heart.png" alt="heart-icon"/>
      <br/>
      <h3 className="thx blue">Bravo</h3>
        <p>Merci, tu gagnes 20xp !</p>
      </div>
    );
  }
}

export default Message;