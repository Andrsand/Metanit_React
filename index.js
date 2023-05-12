function Hello(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0418\u043C\u044F: ", props.name), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", props.age));
}
ReactDOM.createRoot(document.getElementById("app")).render( /*#__PURE__*/React.createElement(Hello, {
  name: "Tom",
  age: "33"
}));
