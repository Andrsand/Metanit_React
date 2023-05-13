function ClickButton(props) {

    function press(e) {
        console.log(e); // выводим информацию о событии
        alert("Hello React!")
    }

    return <button onClick={press}>Click</button>;
}
ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <ClickButton />
    );

