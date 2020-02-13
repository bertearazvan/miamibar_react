import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        id='header'
        style={{
          backgroundImage:
            "url(" +
            process.env.PUBLIC_URL +
            "/assets/images/header-img-1.jpg" +
            ")"
        }}>
        <div
          id='header-h1'
          data-aos='zoom-out'
          data-aos-duration='1000'
          data-aos-easing='ease'
          data-aos-once='true'>
          <h1>BEST NIGHT IN COPENHAGEN</h1>
        </div>
        <div
          id='header-button'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-easing='ease'
          data-aos-once='true'>
          <button type='button' href={"#destination-7"}>
            Reserve a table
          </button>
        </div>
        <div className='mouse-scroll-container'>
          <div className='mouse-scroll loading-spinner'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
