import "./App.css";
import React from "react";
import Header from "./Header";
import TinderCard from "./TinderCrad";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCard />
      <SwipeButtons />
    </div>
  );
}

export default App;
