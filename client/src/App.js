import React from "react";

import Container from "./components/Container";
import Fortune from "./components/FortuneCookie/Fortune";
import Cookie from "./components/FortuneCookie/Cookie";
import FortuneButton from "./components/FortuneCookie/Buttons";

const App = () => {
  return (
    <div className="app">
      <Container mobile={10} tablet={8} desktop={6}>
        <center>
          <h1 className="heading is-size-1">Today's Fortune</h1>
          <Cookie />
          <Fortune />
          <FortuneButton />
        </center>
      </Container>
    </div>
  );
};

export default App;
