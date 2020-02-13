import React from "react";
import ShotGlass from "./ShotGlass";

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      events: []
    };
  }

  componentDidMount() {
    const axios = require("axios");

    axios
      .get("https://mrbertea.com/wordpress/theme7/wp-json/wp/v2/maimi_events")
      .then(data => {
        let stateEvents = [];
        data.data.forEach(element => {
          let c = new Date(element.acf.date).setHours(23, 59, 59, 999);
          if (c > new Date()) {
            stateEvents.push(element);
          }
        });
        this.setState({ events: stateEvents, isLoaded: true });
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  render() {
    if (this.state.events.length === 0) {
      return (
        <div>
          <ShotGlass title='Events' />
          <div id='thank-you-reserve'>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/no_events.png"}
                alt=''
              />
              <p>We are sorry but there are no new events at the moment.</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ShotGlass title='Events' />
          {this.state.events.map((event, index) => {
            return (
              <div
                className='flex-event-holder'
                key={"event-" + index}
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-easing='ease'
                data-aos-once='true'>
                <div className='event-desc-container'>
                  <h3 className='title-event'>{event.acf.title}</h3>
                  <p className='event-date'>{event.acf.date}</p>
                  <p className='event-time'>{event.acf.time_start}</p>
                  <div className='event-desc'>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: event.acf.event_description
                      }}
                      className='event-d'></p>
                  </div>
                  <div style={{ marginTop: "80px", textAlign: "center" }}>
                    <a className='entry-price' href={event.acf.event_link}>
                      SEE EVENT
                    </a>
                  </div>
                </div>
                <div
                  className='event-image'
                  style={{
                    backgroundImage: "url(" + event.acf.image_event + ")"
                  }}
                  id='event-image-1'></div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Events;
