import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
function Banner() {
  const [state, setState] = useState(false);
  const buttonText = state ? "Hide" : "Search Dates";
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          onClick={() => {
            setState(!state);
          }}
          variant="outline"
        >
          {buttonText}
        </Button>
        {state && <Search />}
        {/*  */}
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
