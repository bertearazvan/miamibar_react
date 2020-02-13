import React from "react";
import Header from "../Header";
import Main from "../Main";


class Frontpage extends React.Component {
  render() {
    return (
      <div className='Frontpage'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default Frontpage;
