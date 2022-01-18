import React from "react";
import CabinetMain from "./components/CabinetMain";
import Header from "./components/Header";
function App() {
  let id = 1;
  return (
    <div>
      <Header></Header>
      <CabinetMain userId={id}></CabinetMain>
    </div>
  );
}

export default App;
