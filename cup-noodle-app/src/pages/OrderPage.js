"use es6";

import React, { useState } from "react";
import SelectableButton from "../components/SelectableButton";

const OrderPage = () => {
  const ramenList = ["Chicken", "Beef", "Pork", "Shrimp", "Chilli", "Soy"];
  const toppingsList = [
    "Onion",
    "Corn",
    "Mushroom",
    "Egg",
    "Bean Sprouts",
    "Tofu",
  ];

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
      {ramenList.map((item) => {
        return (
          <SelectableButton
            key={item}
            action={() => {
              updateRamen(item);
            }}
            isActive={ramen === item}
          >
            {item}
          </SelectableButton>
        );
      })}
      <br />
      <span>Your Ramen: {ramen}</span>

      <h3>Choose Toppings</h3>
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
      <button onClick={() => submitOrder()}>SUBMIT</button>
    </>
  );
};

export default OrderPage;
