"use es6";

import React from "react";

const SelectableButton = ({ children, action, isActive }) => {
  var style = {
    color: isActive ? "#ffffff" : "#222222",
    backgroundColor: isActive ? "#879107" : "#fcfcfc",
    width: 200,
    height: 120,
    margin: "10px",
    padding: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",
    fontSize: "20px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "30px",
    borderColor: "none",
    borderStyle: "none",
  };

  return (
    <>
      <button
        style={style}
        onClick={() => {
          action();
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "120px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </div>
      </button>
    </>
  );
};

export default SelectableButton;
