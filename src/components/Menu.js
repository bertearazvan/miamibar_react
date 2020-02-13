import React from "react";

function Menu() {
  return (
    <div id='navigation'>
      <div id='logo-div'>
        <img
          id='logo'
          src={
            process.env.PUBLIC_URL + "/assets/images/logo_white_transparent.png"
          }
          alt='Miami Bar & Cafe logo'
        />
      </div>
      <i id='burger' className='fas fa-bars'></i>

      <div className='anim' id='navigation-links'>
        <ul>
          <li>
            <a href='#destination-1'>HOME</a>
          </li>
          <li>
            <a href='#destination-2'>ABOUT US</a>
          </li>
          <li>
            <a href='menu/miami_menu.pdf' target='_blank'>
              MENU
            </a>
          </li>
          <li>
            <a href='#destination-5'>EVENTS</a>
          </li>
          <li>
            <a href='new-year/'>NEW YEAR</a>
          </li>
          <li>
            <a href='#destination-7'>RESERVE</a>
          </li>
          <li>
            <a href='job/'>JOBS</a>
          </li>
          <li>
            <a href='#destination-8'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
