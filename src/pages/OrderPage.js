"use es6";

import React, { useState } from "react";
import SelectableButton from "../components/SelectableButton";

const OrderPage = () => {
  const flavorList = [
    "Regular Beef",
    "Spicy Beef",
    "Spicy Goût Doux",
    "Spicy Goût Epice",
  ];
  const toppingsList = [
    "Onions",
    "Corn",
    "Mushroom",
    "Egg",
    "Bean Sprouts",
    "Tofu",
  ];

  const flavorMap = {
    "Regular Beef": "a",
    "Spicy Beef": "b",
    "Spicy Goût Doux": "c",
    "Spicy Goût Epice": "d",
  };

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
      <div className="container-order"></div>
      <div style={{ position: "absolute", top: 30, margin: "auto" }}>
        <h1 className="ramen-order-h">Flavor Order</h1>

        <h3 className="ramen-order-h">Choose Flavor</h3>
        {flavorList.map((item) => {
          return (
            <SelectableButton
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
        <span style={{ color: "#ffffff" }}>Your Flavor: {flavor}</span>

        <h3 className="ramen-order-h">Choose Toppings</h3>
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
        <span style={{ color: "#ffffff" }}>
          Your Toppings:{" "}
          {JSON.stringify(toppings)
            .replaceAll('"', " ")
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll(" ,", ",")}
        </span>

        <br />
        <br />
        <button
          className="button"
          style={{
            color: "#222222",
          }}
          onClick={() =>
            submitOrder({
              mode: 0,
              flavor: flavorMap[flavor],
              toppings: toppings,
            })
          }
        >
          SUBMIT
        </button>
        <br />
        <br />
      </div>
    </>
  );
};

export default OrderPage;