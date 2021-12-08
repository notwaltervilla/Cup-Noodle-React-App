import "./App.css";
import React, {useState} from "react";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FlavorPage from "./pages/FlavorPage";
import ToppingsPage from "./pages/ToppingsPage";

function App() {

  // const [flavor, setFlavor] = useState("None");
  // from FlavorPage.js 
  const [flavor, setFlavor] = useState(() => {
    return null;
  });
  const updateFlavor = (selection) => {
    setFlavor((prevFlavor) => selection);
};

  return (
    <div className="App"> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        {/* This is just to build out the UI */}
        <Route path="/order/flavor" element={<FlavorPage />} />
        <Route path="/order/toppings" element={<ToppingsPage flavor={flavor} />} /> 

      </Routes>
    </div>
  );
}

export default App;
