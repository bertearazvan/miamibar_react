import React from "react";
import "./App.css";
import AOS from "aos";
import Menu from "./components/Menu";
import Frontpage from "./components/frontpage/Frontpage";

AOS.init();

function App() {
  return (
    <div className='App'>
      <Menu />
      <Frontpage />
    </div>
  );
}

export default App;
