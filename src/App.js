import React from 'react';
import './App.css';
import Fetch_teacher_data from './Teacher.js'

function App() {
  return (
    <div className="App">
     <Fetch_teacher_data TName="Aamir Pinger" Course="Bootcamp2020" Subject="React.js"/>
     <Fetch_teacher_data TName="Mohsin Khalid" Course="Bootcamp2020" Subject="React.js"/>
     <Fetch_teacher_data TName="Bashir Aziz" Course="Bootcamp2020" Subject="React.js"/>
     <Fetch_teacher_data TName="Ameen Alam" Course="Bootcamp2020" Subject="React.js"/>
    </div>
  );
}

export default App;