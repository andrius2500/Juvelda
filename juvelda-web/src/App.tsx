import React from 'react';

//import ScreensRoot from "./Screens/Root";
import Header from "../src/Components/Header";
import RegistrationForm from "../src/Components/RegistrationForm";
import Service from "../src/Components/Service";
import Reviews from '../src/Components/Reviews';
import Contacts from "../src/Components/Contacts";
import Footer from "../src/Components/Footer";


function App() {
  return (
    <div>
      {/* <ScreensRoot /> */}
      <Header />
      <RegistrationForm saveToDatabase={({
        fullName, email, phone, licensePlate
      }) => {
        console.log(fullName, email, phone, licensePlate)
      }}/>
      
      <Service />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
