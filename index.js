const rootApp = document.getElementById("app"); // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootApp);
function tick() {
  root.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "\u0421\u0435\u0440\u0432\u0438\u0441 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u0438"), /*#__PURE__*/React.createElement("h2", null, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F ", new Date().toLocaleTimeString(), ".")) // элемент, который мы хотим создать
  );
}

setInterval(tick, 1000);
// рендеринг в корневой элемент

const rootContainer = document.getElementById("container"); // элемент для рендеринга приложения React
// получаем корневой элемент 
const root_1 = ReactDOM.createRoot(rootContainer);
// рендеринг в корневой элемент
root_1.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F ", new Date().toLocaleTimeString(), ".")));
