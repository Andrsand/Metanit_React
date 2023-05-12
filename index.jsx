function ClickButton(props) {

    function press() {
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
