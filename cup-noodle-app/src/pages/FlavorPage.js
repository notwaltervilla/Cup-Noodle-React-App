import React, {useState} from 'react'
import Button from '../components/Button.js'
import OrderPage from './OrderPage.js'
import SelectableButton from '../components/SelectableButton'
import {Link } from "react-router-dom";


const FlavorPage = ({setFlavor, flavor, updateFlavor}) => {

    const style = "flavor-options";
    const flavorList = ["Chicken", "Beef", "Pork", "Shrimp", "Chilli", "Soy"];
    
    /* These two functions were moved into App.js
    
    const [flavor, setFlavor] = useState(() => {
        return null;
    }); 

    const updateFlavor = (selection) => {
        setFlavor((prevFlavor) => selection);
    };
    
    */
    
    return (
        <div className="flavor-parent-structure">
            <h1> Select your ramen flavor </h1>
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
            {/* <SelectableButton style="flavor-options"/>
            <SelectableButton style="flavor-options"/>
            <SelectableButton style="flavor-options"/>
            <SelectableButton style="flavor-options"/> */}

            <br />
            <span> Your Flavor: {flavor}</span>

            <Link to="/order/toppings" > <Button color="#A51919" text="Next"/> </Link> 
        </div>
    )
}

export default FlavorPage
