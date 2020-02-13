import React from "react";
import Description from "./Description";
import Team from "./frontpage/Team";
import Services from "./frontpage/Services";
import Events from "./Events";

class Main extends React.Component {
  render() {
    return (
      <div id='container-wrap'>
        <Description />
        <Team />
        <Services />
        <Events />
      </div>
    );
  }
}

export default Main;
