function ClickButton(props) {
  function press(e) {
    console.log(e); // выводим информацию о событии
    alert("Hello React!");
  }
  return /*#__PURE__*/React.createElement("button", {
    onClick: press
  }, "Click");
}
ReactDOM.createRoot(document.getElementById("app")).render( /*#__PURE__*/React.createElement(ClickButton, null));
