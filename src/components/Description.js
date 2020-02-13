import React from "react";
import ShotGlass from "./ShotGlass";

class Description extends React.Component {
  render() {
    return (
      <div
        className='container'
        id='desc-container'
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-easing='ease'
        data-aos-once='true'>
        <ShotGlass title='ABOUT US' />
        <div id='description-container'>
          <span>
            Miami Bar is a full service three floor night club located in the
            heart of Gammeltorv, the party centre of Copenhagen. Come and enjoy
            delicious cocktails, enjoy the vibrant music that surrounds you and
            immerse yourself in the high energy atmosphere.
          </span>
          <br />
          <br />
          <span>
            We offer an outdoor terrace (heated during the winter months), a
            large dance floor on the second floor where you can feel free to
            bust down, and a Gold Lounge located on the third floor for all your
            private party needs.
          </span>
          <br />
          <br />
          <span style={{ fontSize: "24px", fontWeight: "900" }}>
            EXPERIENCE AWAITS
          </span>
        </div>
      </div>
    );
  }
}

export default Description;
