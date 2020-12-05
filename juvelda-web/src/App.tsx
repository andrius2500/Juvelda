import React from 'react';

//import ScreensRoot from "./Screens/Root";
// import Header from "../src/Components/Header";
import RegistrationForm from "../src/Components/RegistrationForm";


function App() {
  return (
    <div>
      {/* <ScreensRoot /> */}
      {/* <Header /> */}
      <RegistrationForm saveToDatabase={({
        fullName, email, phone, licensePlate
      }) => {
        console.log(fullName, email, phone, licensePlate)
      }}/>
    </div>
  );
}

export default App;
