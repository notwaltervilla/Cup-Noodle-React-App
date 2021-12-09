import React, { useState } from "react";

const CTAButton = ({ children, color, onClick }) => {
  const [buttonHovered, setButtonHovered] = useState(false);

  const darkColor = (hexcode) => {
    var red = parseInt(String(hexcode.substring(0, 2)), 16) - 45;
    var green = parseInt(String(hexcode.substring(2, 4)), 16) - 45;
    var blue = parseInt(String(hexcode.substring(4, 6)), 16) - 45;
    var r =
      red >= 255
        ? (red = `ff`)
        : red <= 0
        ? (red = `00`)
        : red >= 16
        ? red.toString(16)
        : `0${red.toString(16)}`;
    var g =
      green >= 255
        ? (green = `ff`)
        : green <= 0
        ? (green = `00`)
        : green >= 16
        ? green.toString(16)
        : `0${green.toString(16)}`;
    var b =
      blue >= 255
        ? (blue = `ff`)
        : blue <= 0
        ? (blue = `00`)
        : blue >= 16
        ? blue.toString(16)
        : `0${blue.toString(16)}`;
    return `${r}${g}${b}`;
  };

  var style = {
    backgroundColor: buttonHovered ? `#${darkColor(color)}` : `#${color}`,
    color: "#ffffff",
  };
  return (
    <div>
      <button
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        style={style}
        className="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default CTAButton;
