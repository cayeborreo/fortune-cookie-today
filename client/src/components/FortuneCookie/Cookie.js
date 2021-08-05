import React from "react";
import Container from "../Container";
import CookieSVG from "../../assets/fortune-cookie.svg";

const Cookie = () => {
  return (
    <Container mobile={6} tablet={6} desktop={4} className="my-5">
      <center>
        <figure className="image is-square">
          <img src={CookieSVG} alt="X" className="image__cookie" />
        </figure>
      </center>
    </Container>
  );
};

export default Cookie;
