"use es6";

import React, { useState } from "react";

const SelectableButton = ({style, children, value, action, isActive }) => {
  // var style = {
  //   color: "888888",
  //   backgroundColor: isActive ? "#cccccc" : "#eeeeee",
  //   width: 200,
  //   height: 120,
  //   margin: "10px",
  //   padding: "auto",
  //   borderRadius: "25px",
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "stretch",
  //   flexDirection: "column",
  //   fontSize: "20px",
  // };

  return (
    <>
      <button
        className={style}
        onClick={() => {
          action();
        }}
      >
        {children}
      </button>
    </>
  );
};

export default SelectableButton;
