import React from "react";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Advantages from "./pages/Advantages";
import CareerProgram from "./pages/CareerProgram";
import Goals from "./pages/Goals";
import CoolStuff from "./pages/CoolStuff";

// import HomePage from "./component/HomePage";
// import Advantage from "./dumped/Advantage/Advantage";
// import CareerProgram from "./dumped/CareerProgram/CareerProgram";
// import GoalsUI from "./dumped/GoalsUI/GoalsUI";
// import StuffSection from "./dumped/StuffSection/StuffSection";

function App() {
  return (
    <>
      <Home />
      <Advantages />
      <CareerProgram />
      <Goals />
      <CoolStuff />
      <Footer />
      {/* <Advantage />
      <CareerProgram />
      <GoalsUI /> */}
      {/* <div className="">
        <StuffSection />
      </div> */}
    </>
  );
}

export default App;
