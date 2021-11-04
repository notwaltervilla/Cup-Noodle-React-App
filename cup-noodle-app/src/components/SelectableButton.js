"use es6";

const SelectableButton = ({ children, value, action, isActive }) => {
  var style = {
    color: "888888",
    backgroundColor: isActive ? "#cccccc" : "#eeeeee",
    width: 200,
    height: 120,
    margin: "10px",
    padding: "auto",
    borderRadius: "25px",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexDirection: "column",
    fontSize: "20px",
  };

  return (
    <>
      <button
        style={style}
        onClick={() => {
          action();
          console.log({ isActive });
        }}
      >
        {children}
      </button>
    </>
  );
};

export default SelectableButton;
