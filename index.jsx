function PrintButton(props) {

    function print(name, age) {
        console.log(`Name ${name}  Age: ${age}`);
    }

    return <div>
        <button onClick={() => print("Bob", 23)}>Print Bob</button>
        <button onClick={() => print("Tom", 36)}>Print Tom</button>
    </div>;
}
ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <PrintButton />
    );

