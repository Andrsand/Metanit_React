function PrintButton(props) {
  function print(name, age) {
    console.log(`Name ${name}  Age: ${age}`);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => print("Bob", 23)
  }, "Print Bob"), /*#__PURE__*/React.createElement("button", {
    onClick: () => print("Tom", 36)
  }, "Print Tom"));
}
ReactDOM.createRoot(document.getElementById("app")).render( /*#__PURE__*/React.createElement(PrintButton, null));
