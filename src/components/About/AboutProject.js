import React from "react";
import { FaReact } from "react-icons/fa";

//STYLES
import "./about.css";

const AboutProject = () => {
  const contactUrl = `${process.env.PUBLIC_URL}/contact`;
  const graphQLUrl = "https://graphql.org/";
  const mongoUrl = "https://www.mongodb.com/cloud/atlas";
  const reactUrl = "https://reactjs.org/";

  return (
    <div className="container about-project">
      <div className="nav-background"></div>
      <div className="about-container">
        <h1>About This Project...</h1>
        <p>
          Hello, welcome to my first attempt of making a full-blown website! I
          like reading, watching things and playing games; I also like making
          short remarks about the things I like as a rather silly attempt to
          spread my enthusiasm to other people.{" "}
        </p>
        <p>
          Aim of this little project is to both test my development skills, and
          to combine these two perks of mine in a single representation. I
          acknowledge that the concept of an online platform dedicatad solely to
          reviewing some content is a bit old fashioned, but when I realized
          this simple truth, I was already half way through, and also the idea
          of making a website of my own was so exciting that it easily eclipsed
          the mundaneness of the concept.
        </p>
        <p>
          Regarding this page: Everything you see is designed by me with{" "}
          <a href={reactUrl}>
            React <FaReact />
          </a>{" "}
          and CSS. Review data is stored in a{" "}
          <a href={mongoUrl}>MongoDB cluster</a>, which is accessed by an
          Express <a href={graphQLUrl}>GraphQL</a> server on the backend, which
          is also written from scratch.{" "}
        </p>
        <p>
          Anyway, thanks for visiting this website. If you want to work with me,
          or else give some professional advice (unprofessional advice is also
          appreciated, btw), my contact info is{" "}
          <a
            style={{ textDecoration: "none", fontWeight: "bold" }}
            href={contactUrl}
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AboutProject;
