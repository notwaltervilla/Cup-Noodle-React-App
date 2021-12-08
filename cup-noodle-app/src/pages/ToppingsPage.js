import React, {useState} from 'react'
import Button from '../components/Button.js'
import OrderPage from './OrderPage.js'
import SelectableButton from '../components/SelectableButton'
import {Link } from "react-router-dom";
import FlavorPage from "./FlavorPage"

const ToppingsPage = ({flavor}) => {
    const toppingsList = [
        "Onion",
        "Corn",
        "Mushroom",
        "Egg",
        "Bean Sprouts",
        "Tofu",
      ];

    const [toppings, setToppings] = useState(() => {
        return [];
      });

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
        <div className="flavor-parent-structure">
            <h3>Choose Toppings</h3>
                {toppingsList.map((item) => {
                    return (
                        <SelectableButton
                        key={item}
                        action={() => {
                        updateToppings(item);
                    }}
                        isActive={toppings.indexOf(item) !== -1}>
                        {item}
                        </SelectableButton>
                    );
                })}
            <br />
            <span>Your Toppings: {JSON.stringify(toppings)}</span>
            <br />
            <br />
            {/* <button
                onClick={() =>
                submitOrder({ mode: 0, flavor: flavor, toppings: toppings })
                }
            >
            SUBMIT
            </button> */}

            <Button 
                text="Submit"
                onClick={ () =>
                    submitOrder({ mode: 0, flavor: flavor, toppings: toppings })
                }
            />
        </div>
    )
    
}

export default ToppingsPage
