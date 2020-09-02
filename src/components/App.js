import React from "react";
import "./App.css";
import  Person from "./Person"
import School from "./School"


function App(props) {
  return (
    <div className="App">
      <Person  name= "Bessy"  />
      <Person name= "Laura"   />
      <Person  name= "Sarah"  />
     <School />
    </div>
  );
}

export default App;
