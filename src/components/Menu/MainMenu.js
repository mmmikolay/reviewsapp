import React from "react";

//STYLES
import "./mainmenu.css";
import { CircleOutline, MenuButton } from "./MenuImages";

import { useHistory } from "react-router-dom";

export default function MainMenu() {
  let history = useHistory();

  return (
    <>
      <div className="menu-container">
        <div className="background"></div>
        <div className="menu-background"></div>
        <div className="menu-button-container">
          <div
            className="menu-button deg0"
            onClick={() => {
              history.push("/books");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="BOOKS" />
            </div>
          </div>
          <div
            className="menu-button deg120"
            onClick={() => {
              history.push("/movies");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="MOVIES" />
            </div>
          </div>
          <div
            className="menu-button deg240"
            onClick={() => {
              history.push("/games");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="GAMES" />
            </div>
          </div>
        </div>

        <div className="menu-button-container inner">
          <div
            className="menu-button deg0"
            onClick={() => {
              history.push("/about");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="ABOUT" />
            </div>
          </div>
          <div
            className="menu-button deg120"
            onClick={() => {
              history.push("/contact");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="CONTACT" />
            </div>
          </div>
          <div
            className="menu-button deg240"
            onClick={() => {
              history.push("/thanks");
            }}
          >
            <div>
              <MenuButton />
            </div>
            <div>
              <CircleOutline buttonText="THANKS" />
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="menu-container">

    //     <div className="circle-container">
    //         <div className="deg0" onClick={() => history.push('/books')}><Circle /></div>
    //         <div className="deg120" onClick={() => history.push('/books')}><Circle/></div>
    //         <div className="deg240" onClick={() => history.push('/books')}><Circle/></div>
    //     </div>

    //     <div className="circle-container inner">
    //         <div className="deg0" onClick={() => history.push('/about')}><Circle /></div>
    //         <div className="deg120" onClick={() => history.push('/thanks')}><Circle/></div>
    //         <div className="deg240" onClick={() => history.push('/contact')}><Circle/></div>
    //     </div>
    // </div>
  );
}
