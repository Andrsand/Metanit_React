const rootApp = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootApp);
function tick() {
    root.render(
        <div>
            <h1>Сервис получения времени</h1>
            <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
        </div> // элемент, который мы хотим создать
    );
}
setInterval(tick, 1000);
// рендеринг в корневой элемент


const rootContainer = document.getElementById("container");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root_1 = ReactDOM.createRoot(rootContainer);
// рендеринг в корневой элемент
root_1.render(
    <div>
        <h2>Начальное время {new Date().toLocaleTimeString()}.</h2>
    </div>
);
