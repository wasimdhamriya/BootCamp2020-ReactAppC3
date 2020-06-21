import React from 'react';
import './App.css';
import Fetchteacherdata from "./Teacher.js";

function App() {
  return (
    <div className="App">
     <Fetchteacherdata TName="Aamir Pinger" Course="Bootcamp2020" Subject="React.js"/>
     <Fetchteacherdata TName="Mohsin Khalid" Course="Bootcamp2020" Subject="React.js"/>
     <Fetchteacherdata TName="Bashir Aziz" Course="Bootcamp2020" Subject="React.js"/>
     <Fetchteacherdata TName="Ameen Alam" Course="Bootcamp2020" Subject="React.js"/>
    </div>
  );
}

export default App;