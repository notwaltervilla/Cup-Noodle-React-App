"use es6";

import React, { useState } from "react";
import SelectableButton from "../components/SelectableButton";
import CTAButton from "../components/CTAButton.js";

const OrderPage = () => {
  const flavorList = [
    "Regular Beef ð¥©",
    "Spicy Beef ð¥",
    "Spicy GoÃ»t Doux ð²",
    "Spicy GoÃ»t Epice ð¶",
  ];
  const toppingsList = [
    "Onions ð§",
    "Corn ð½",
    "Mushroom ð",
    "Egg ð¥",
    "Bean Sprouts ð±",
    "Carrot ð¥",
  ];

  const flavorMap = {
    "Regular Beef ð¥©": "a",
    "Spicy Beef ð¥": "b",
    "Spicy GoÃ»t Doux ð²": "c",
    "Spicy GoÃ»t Epice ð¶": "d",
  };

  const toppingsMap = {
    "Onions ð§": "a",
    "Corn ð½": "b",
    "Mushroom ð": "c",
    "Egg ð¥": "d",
    "Bean Sprouts ð±": "e",
    "Carrot ð¥": "f",
  };

  const [flavor, setFlavor] = useState(() => {
    return null;
  });

  const [toppings, setToppings] = useState(() => {
    return [];
  });

  const [submittedOrder, setSubmittedOrder] = useState(false);

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
    setSubmittedOrder(true);
    fetch("https://cupnoodle-api.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    console.log(submittedOrder);
  };

  return (
    <>
      <div className="container-order"></div>
      <div
        style={{
          position: "absolute",
          top: 50,
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
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
        {!submittedOrder && (
          <CTAButton
            color="879107"
            onClick={() =>
              submitOrder({
                mode: 0,
                flavor: flavorMap[flavor],
                toppings: toppings.map((topping) => toppingsMap[topping]),
              })
            }
          >
            Submit ð
          </CTAButton>
        )}
        {submittedOrder && (
          <p className="notification">Your order is being processed!</p>
        )}
        <br />
        <br />
      </div>
    </>
  );
};

export default OrderPage;
