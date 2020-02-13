import React from "react";

class ShotGlass extends React.Component {
  render() {
    return (
      <div>
        <div className='icon-div'>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/shot-glass.png"}
            alt=''
          />
        </div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default ShotGlass;
