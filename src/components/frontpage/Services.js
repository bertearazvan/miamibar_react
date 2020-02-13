import React from "react";
import ShotGlass from "../ShotGlass";

class Services extends React.Component {
  render() {
    const services = [
      {
        name: "CORPORATE EVENTS",
        description:
          "Are you looking for somewhere to host your Julefrokost or a Summer Party? Miami bar offers catering and open bar deals to suit your needs.",
        imageName: "corporate-service-cropped.png"
      },
      {
        name: "BRANDED EVENTS",
        description:
          "Calling all brands, music groups and organizations. Are you looking for the next best place tohold your event? Miami’s got you covered.Three floors, two sounds, and one unforgettable nightawaits.",
        imageName: "brand-service-cropped.png"
      },
      {
        name: "PRIVATE PARTIES",
        description:
          "Celebrating a Birthday? A graduation? Perhaps a bachelorette or bachelor party. Contact us today to reserve your spot in the Gold Lounge and host the best party you will ever attend.",
        imageName: "birthday-service-cropped.png"
      },
      {
        name: "VIP SERVICES",
        description:
          "From time to time Miami welcomes Danish and internationally known personalities.",
        imageName: "vip-service-cropped.png"
      }
    ];
    return (
      <div>
        <ShotGlass title='SERVICES' />
        <div id='flex-services-container'>
          {services.map((item, index) => {
            return (
              <div
                className='service'
                key={"service-" + index}
                data-aos='flip-left'
                data-aos-duration='1000'
                data-aos-easing='ease'
                data-aos-once='true'>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/" + item.imageName
                  }
                  alt=''
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Services;
