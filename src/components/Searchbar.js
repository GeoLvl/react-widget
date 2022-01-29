import React from "react";

const Searchbar = () => {
  return (
    <div className="search">
      <form>
        <div>
          <input
            className="input-search"
            placeholder="quel est ton déchet ?"
          ></input>
          <button className="submit">let's go</button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
