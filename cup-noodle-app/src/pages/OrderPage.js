"use es6";

import React, { useState } from "react";
import SelectableButton from "../components/SelectableButton";
import FlavorPage from "../pages/FlavorPage";

const OrderPage = () => {
  const flavorList = ["Chicken", "Beef", "Pork", "Shrimp", "Chilli", "Soy"];
  const toppingsList = [
    "Onion",
    "Corn",
    "Mushroom",
    "Egg",
    "Bean Sprouts",
    "Tofu",
  ];

  const [flavor, setFlavor] = useState(() => {
    return null;
  });

  const [toppings, setToppings] = useState(() => {
    return [];
  });

  const updateFlavor = (selection) => {
    setFlavor((prevFlavor) => selection);
  };

  const updateToppings = (topping) => {
    setToppings((prevToppings) =>
      prevToppings.indexOf(topping) === -1
        ? [...prevToppings, topping]
        : prevToppings.filter((item) => item !== topping)
    );
  };

  const submitOrder = (order) => {
    console.log(JSON.stringify(order));
    fetch("https://cupnoodle-api.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  };

  return (
    <>
      {/* <h1>Flavor Order</h1>

      <h3>Choose Flavor</h3>
      {flavorList.map((item) => {
        return (
          <SelectableButton 
            style="flavor-child-structure"
            key={item}
            action={() => {
              updateFlavor(item);
            }}
            isActive={flavor === item}
          >
            {item}
          </SelectableButton>
        );
      })}
      <br />
      <span>Your Flavor: {flavor}</span> */}

      {/* <h3>Choose Toppings</h3>
      {toppingsList.map((item) => {
        return (
          <SelectableButton
            key={item}
            action={() => {
              updateToppings(item);
            }}
            isActive={toppings.indexOf(item) !== -1}
          >
            {item}
          </SelectableButton>
        );
      })}
      <br />
      <span>Your Toppings: {JSON.stringify(toppings)}</span>

      <br />
      <br />
      <button
        onClick={() =>
          submitOrder({ mode: 0, flavor: flavor, toppings: toppings })
        }
      >
        SUBMIT
      </button> */}
      <FlavorPage setFlavor={setFlavor} flavor={flavor} updateFlavor={updateFlavor}/>
      </>
  );
};

export default OrderPage;
