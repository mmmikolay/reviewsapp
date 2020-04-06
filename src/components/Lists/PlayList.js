import React from "react";
import GamesList from "./GamesList";
import NavBar from "../NavBar/NavBar";

//STYLES
import "./list.css";

const PlayList = () => {
  return (
    <>
      <div style={{ background: "#fafafa" }}>
        <NavBar />
      </div>
      <div className="list-container">
        <h1>
          <small>GAMES I HAVE</small> <br />
          KNOWN AND LIKED
        </h1>
        <p>
          Here I tried to list some of the PC games that got caught to my
          interest through the years. What I want to find in a PC game is a
          unique experience. By that I mean a game should be different from
          others by at least one radically unique feature.
        </p>
        <p>
          {" "}
          Game design based on an Idea is, In my opinion, something we now can
          only encounter on independent (and most probably relatively
          low-budget) designs. Be it a mind-boggling puzzler, or a difficult as
          hell platformer, majority of the impressive work was produced by small
          indie developers. I respect their work and effort.
        </p>
      </div>
      <GamesList itemType="game" />
    </>
  );
};

export default PlayList;
