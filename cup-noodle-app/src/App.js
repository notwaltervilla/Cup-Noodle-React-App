import { indexOf } from "lodash";
import React from "react";
import { useState } from "react";

function App() {
  const [ramen, setRamen] = useState(() => {
    return null;
  });

  const [toppings, setToppings] = useState(() => {
    return [];
  });

  const updateRamen = (flavor) => {
    setRamen((prevRamen) => flavor);
  };

  const updateToppings = (topping) => {
    setToppings((prevToppings) =>
      prevToppings.indexOf(topping) === -1
        ? [...prevToppings, topping]
        : prevToppings.filter((item) => item !== topping)
    );
  };

  const submitOrder = (order) => {
    order = [ramen, toppings];
    console.log(order);
  };

  return (
    <>
      <h1>Ramen Order</h1>

      <h3>Choose Ramen</h3>
      <button onClick={() => updateRamen("Chicken")}>Chicken</button>
      <br />
      <button onClick={() => updateRamen("Beef")}>Beef</button>
      <br />
      <button onClick={() => updateRamen("Shrimp")}>Shrimp</button>
      <br />
      <button onClick={() => updateRamen("Pork")}>Pork</button>
      <br />
      <span>Your Ramen: {ramen}</span>

      <h3>Choose Toppings</h3>
      <button onClick={() => updateToppings("Onion")}>Onion</button>
      <br />
      <button onClick={() => updateToppings("Corn")}>Corn</button>
      <br />
      <button onClick={() => updateToppings("Mushroom")}>Mushroom</button>
      <br />
      <button onClick={() => updateToppings("Egg")}>Egg</button>
      <br />
      <span>Your Toppings: {JSON.stringify(toppings)}</span>

      <br />
      <br />
      <button onClick={() => submitOrder()}>SUBMIT</button>
    </>
  );
}

export default App;
