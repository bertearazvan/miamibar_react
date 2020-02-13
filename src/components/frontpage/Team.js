import React from "react";
import ShotGlass from "../ShotGlass";

class Team extends React.Component {
  render() {
    const teamMembers = [
      {
        name: "Jes Secher",
        position: "Resident DJ",
        pictureName: "member-1.jpg"
      },
      {
        name: "Zioga",
        position: "Resident DJ",
        pictureName: "member-2.jpg"
      },
      {
        name: "Cardenas",
        position: "Resident DJ",
        pictureName: "member-3.jpg"
      },
      {
        name: "Alin",
        position: "Bartender",
        pictureName: "member-4.jpg"
      },
      {
        name: "Cassandra",
        position: "Bartender",
        pictureName: "member-6.jpg"
      }
    ];
    return (
      <div className='container' id='team-container'>
        <ShotGlass title='OUR TEAM' />
        <div id='flex-team-container'>
          {teamMembers.map((member, index) => {
            index += 1;
            return (
              <div
                id={"member-" + index}
                key={"member-" + index}
                style={{
                  backgroundImage:
                    "url(" +
                    process.env.PUBLIC_URL +
                    "/assets/images/" +
                    member.pictureName +
                    ")"
                }}
                className='team-member-container'
                data-aos='zoom-in'
                data-aos-duration='1000'
                data-aos-easing='ease'
                data-aos-once='true'>
                <div id={"inner-member-" + index}>
                  <div>
                    <p className='name-member'>{member.name}</p>
                    <p className='position-member'>{member.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Team;
