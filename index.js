function ClickButton(props) {
  function press() {
    alert("Hello React!");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: press
  }, "Click");
}
ReactDOM.createRoot(document.getElementById("app")).render( /*#__PURE__*/React.createElement(ClickButton, null));
